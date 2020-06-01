import axios from './http'

export default function(arr){
	class CustomAxios{
		constructor(){
			this.vueThis = null;
		}
		getAxios(config){
			let self = this, _url = config.url, _data = config.params, _type = config.method;
			let factory = {
				get:function(){
					return axios.get(_url)
				},
				post:function(){
					return axios.post(_url, _data)
				}
			}
			return factory[_type]();
		}
		sendAxios(config){
			let self = this;
			let a = this.getAxios(config).then(res =>{
                // console.log("axiosRes=>", res.data)
                //console.log(self)
				self.vueThis[config.name] = res.data
				return res.data
			})
			return a;

		}
		handleAxios(){
		
		
		}
	}

	var _axios = new CustomAxios();
	arr.forEach((item, index) =>{
		//Object.defineProperty(obj, key, { get:callback, get:callback })
		_axios[item.name] = function(vueThis, config = {}){
      _axios.vueThis = vueThis;
			let defaultConfig = {
				name:item.name,
				url:item.url,
				method:"post",
				params:{},
			}
			config = Object.assign({},defaultConfig, config)
			return this.sendAxios(config)
		}
	})

	return _axios;
}