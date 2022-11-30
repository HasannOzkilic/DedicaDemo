const appData = {
    taskState: {
        tamamlandi: {
            message: "Tamamlandı",
            backgroundColor: "green",
        },
        yapılacak: {
            message: "Yapılacak",
            backgroundColor: "gray",
        },
        işlemde: {
            message: "İşlemde",
            backgroundColor: "red",
        }
    },
    API: {
        baseUrlAPI: "https://akindizaynpanel.com/demolar/dedicademo/",
        modelForLogin: {
            username: "admin",
            password: "123456"
        }
    }
}
export default appData;