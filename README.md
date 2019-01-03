# rest-express

### 项目介绍

express rest api with mongodb and mysql

[![Rest-Express](https://github.com/guobin211/rest-express/blob/master/images/github.jpg)](https://github.com/guobin211/rest-express)

#### 安装APIDOC自动生成api文档

[![api-doc](https://github.com/guobin211/rest-express/blob/master/images/api.png)](http://apidocjs.com/)

    自动生成接口api文档

    apidoc -i routes/ -o public/apidoc/

    替代方案可以使用swagger

#### REST接口写法

    ```
    /**
     * @api {get} /api/users 用户列表
     * @apiDescription 用户列表
     * @apiName getUserList
     * @apiGroup User
     * @apiParam {string} loginName 用户名
     * @apiParam {string} loginPass 密码
     * @apiSuccess {json} result
     * @apiSuccessExample {json} Success-Response:
     *  {
     *      "success" : "true",
     *      "result" : {
     *          "name" : "loginName",
     *          "password" : "loginPass"
     *      }
     *  }
     * @apiSampleRequest http://localhost:3000/api/user
     * @apiVersion 0.1.0
     */
    router.get('/', function (req, res, next) {
        controller.findAll().then(result => {
            if (result) {
                res.send(result);
            } else {
                res.send('nothing can be found');
            }
        });
        next();
    });
    
    router.get('/:id', function (req, res, next) {
        controller.findById(req.params.id).then(result => {
            res.send(result);
        }).catch(err => {
            res.send(err);
        });
        next();
    });
    
    router.post('/', function (req, res, next) {
        res.send('respond with a resource');
        next();
    });
    
    router.put('/:id', function (req, res, next) {
        if (!req.params.id) {
            res.send('id 不能为空');
        } else {
            controller.findOneAndUpdate(req.params.id, req.body).then(result => {
                res.send(req.body);
            }).catch(err => res.send(err));
        }
        next();
    });
    
    router.delete('/:id', function (req, res, next) {
        res.send('respond with a resource');
        next();
    });
    
    ```
#### HTTP
[![api-doc](https://github.com/guobin211/rest-express/blob/master/images/http.jpg)](https://github.com/guobin211/rest-express)

 
#### 文件结构

    client      -- pwa  前端项目
    public      -- node 公共文件
    routes      -- node 服务端路由
    service     -- node 服务端业务逻辑 
    test        -- node 模块测试文件
    uploads     -- file 接收上传的文件

#### 软件架构
    
    nodejs  10.14
    express ^4.16.0
    mysql   ^5.6-8.0
    mongodb 4.04


#### 安装并开发

1. git clone [https://github.com/guobin211/rest-express.git](https://github.com/guobin211/rest-express)
2. npm install
3. npm run nodemon

#### 使用说明

1. 确保安装所有运行环境
2. 使用默认配置启动mongodb和mysql数据库
3. npm run start 或者使用 pm2启动

