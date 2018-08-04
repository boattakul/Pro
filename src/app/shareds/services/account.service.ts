import { Injectable } from '@angular/core';
import { IRegister } from '../../components/register/register.interface';
@Injectable()
export class AccountService {

    // ลงทะเบียน
    onRegister(model: IRegister) {
        return new Promise((resolve, reject) => {
            resolve(model);
        });
    }

}