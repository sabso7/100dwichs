
class errorHandler{

    constructor() {
        const errorMsg = '';
    }

    async getErrorCode(errorCode){

        switch (errorCode) {
            case 401 :
                localStorage.setItem('user-token', ''),localStorage.setItem('is-auth', false);
                errorMsg = 'Veuillez vous (re)connecter !';
                break;
        }
        
        return errorMsg;
    };
};


