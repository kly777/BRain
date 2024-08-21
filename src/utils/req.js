// 导入axios库
import axios from "axios";
// 导入vue的h函数和element-plus的ElNotification组件
import { h } from "vue";
import { ElNotification } from "element-plus";
// 创建axios实例
const req = axios.create({
    baseURL: "http://127.0.0.1:8000/api/", // 设置请求的基础URL
    timeout: 1000, // 设置请求超时时间
});
// 设置请求头携带cookie
req.defaults.withCredentials = true;
// 请求拦截器
req.interceptors.request.use((config) => {
    // 从localStorage中获取token
    const token = localStorage.getItem("token");
    if (token) {
        // 如果有token，则将token添加到请求头中
        config.headers.Authorization = `Token ${token}`;
    }
    return config;
}, (error) => {
    console.error("Request Interceptor Error:", error);
    return Promise.reject(error);
});
// 响应拦截器
req.interceptors.response.use((response) => {
    // 处理成功的响应
    return response;
}, (error) => {
    let message = "";
    if (error) {
        // 根据不同的响应状态码，设置不同的错误信息
        switch (error.response.status) {
            case 302:
                message = "接口重定向了！";
                break;
            case 400:
                message = "参数不正确！";
                break;
            case 401:
                message = "您未登录，或者登录已经超时，请先登录！";
                break;
            case 403:
                message = "您没有权限操作！";
                break;
            case 404:
                message = `请求地址出错: ${error.response.config.url}`;
                break;
            case 408:
                message = "请求超时！";
                break;
            case 409:
                message = "系统已存在相同数据！";
                break;
            case 500:
                message = "服务器内部错误！";
                break;
            case 501:
                message = "服务未实现！";
                break;
            case 502:
                message = "网关错误！";
                break;
            case 503:
                message = "服务不可用！";
                break;
            case 504:
                message = "服务暂时无法访问，请稍后再试！";
                break;
            case 505:
                message = "HTTP 版本不受支持！";
                break;
            default:
                message = "异常问题，请联系管理员！";
                break;
        }
    }
    // 使用element-plus的ElNotification组件显示错误信息
    ElNotification({
        title: "error",
        message: h("i", { style: "color: red" }, message),
    });
    return Promise.reject(message);
});
// 导出axios实例
export default req;
