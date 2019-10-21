<template>
    <div class="manageIndex">
        
        <Row class="wrapper" >
            <Col span="24" class="section" >
                <Card>
                    <Steps :current="1">
                        <Step title="已完成" content="这里是该步骤的描述信息"></Step>
                        <Step title="进行中" content="这里是该步骤的描述信息"></Step>
                        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
                        <Step title="待进行" content="这里是该步骤的描述信息"></Step>
                    </Steps>
                </Card>
            </Col>
        </Row>
        <Row >
            <Col :md="{'span':5}" class="section" >
                <Card>
                    <Row>
                        <Col span="8">
                            <Icon type="ios-albums-outline" />
                        </Col>
                        <Col span="16">
                        <p class="subText">消息</p>
                        <h3>25</h3>
                        </Col>
                    </Row>
                </Card>
                <Card>
                    <Row>
                        <Col span="8">
                            <Icon type="ios-albums-outline" />
                        </Col>
                        <Col span="16">
                        <p class="subText">消息</p>
                        <h3>25</h3>
                        </Col>
                    </Row>
                </Card>
                <Card>
                    <Row>
                        <Col span="8">
                            <Icon type="ios-albums-outline" />
                        </Col>
                        <Col span="16">
                        <p class="subText">消息</p>
                        <h3>25</h3>
                        </Col>
                    </Row>
                </Card>
                <Card>
                    <Row>
                        <Col span="8">
                            <Icon type="ios-albums-outline" />
                        </Col>
                        <Col span="16">
                        <p class="subText">消息</p>
                        <h3>25</h3>
                        </Col>
                    </Row>
                </Card>
                
             </Col>
            <Col :md="{'span':18, }" class="section" >
                    <List header="Header" border size="small">
                        <ListItem>This is a piece of text.</ListItem>
                        <ListItem>This is a piece of text.</ListItem>
                        <ListItem>This is a piece of text.</ListItem>
                        <ListItem>This is a piece of text.</ListItem>
                        <ListItem>This is a piece of text.</ListItem>
                    </List>
             </Col>
        </Row>


    </div>
</template>
<script>
export default {
    
}
</script>
<style lang="less">
    .manageIndex{
        
    }
    .ivu-list-item{
        height: 53px !important;
    }
    .section{
        margin: 2px;
    }
</style>