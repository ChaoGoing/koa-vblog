import axios from 'axios'

export default function(arr){
	// console.log("into customAxios")
	class CustomAxios{
		constructor(){
			this.vueThis = null;
		}

		//����ģʽ��װaxios
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
		//����axios
		sendAxios(config){
			let self = this;
			//��������ﶨ��status��status��Ӱ����������ô���Ƿ����ȫ��ֻ��ͬʱ����һ������
			let a = this.getAxios(config).then(res =>{
                console.log("axiosRes=>", res)
                //console.log(self)
				self.vueThis[config.name] = res.data
				return res
			})

			return a;

		}
		//������
		handleAxios(){
		
		
		}
	}

	var _axios = new CustomAxios();
	arr.forEach((item, index) =>{
		_axios[item.name] = function(vueThis, config = {}){
			//console.log(vueThis)
            _axios.vueThis = vueThis;
            //console.log(_axios)
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