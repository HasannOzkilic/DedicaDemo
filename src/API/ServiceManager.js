import axios from "axios"
import appData from "../appDatas/appData"

export default function PostAPI(url) {
    let datas;

    datas = axios({
        method: "post",
        url: appData.API.baseUrlAPI + url,
        data: appData.API.modelForLogin,
        headers: { "Content-Type": "multipart/form-data" }


    }).then(response => response.data)

    return datas;

}

function GetWithToken(url, token) {
    let datas;

    const endPoint = appData.API.baseUrlAPI + url;

    datas = axios.get(endPoint, { headers: { "Authorization": "Bearer " + token } })
        .then(response => response.data);

    return datas;
}
export { GetWithToken }
