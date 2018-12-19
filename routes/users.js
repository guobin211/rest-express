const express = require('express');
const router = express.Router();

const controller = require('../service/controllers/users.controller');

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

module.exports = router;
