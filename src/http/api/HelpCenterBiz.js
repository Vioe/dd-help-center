import axios from '../axios';
import {
  rootDomain
} from '@/global/constants';

export class HelpCenterBiz {
  /**
   * 获取影集信息
   */
  static getHelpInfo(params = {}) {
    return axios.post(`${rootDomain}/H5/GetSupportContent`, params).then(
      res => {
        return Promise.resolve(res);
      },
      err => {
        return Promise.reject(err);
      }
    );
  }
}