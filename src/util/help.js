import _ from 'lodash';
import router from 'umi/router'
import qs from 'qs';

export const resetPagination = (query) => {
    return {
      ...query,
      page: 1,
      pageSize: 10,
    };
};

export const goToFilterURL = (value, IsResetPagination = false) => {
    router.push(getGoToFilterURL(value, IsResetPagination))
};

export const getGoToFilterURL = (value, IsResetPagination = false) => {
    let { pathname, search } = window.location;
    let locationQuery = qs.parse(search.substring(1))
    console.log('===value', value)
    console.log('===locationQuery', locationQuery)
    let query = {
        ...locationQuery,
        ...value,
    };
    // if (IsResetPagination) {
    //     query = resetPagination(query);
    // }
    // router.push(`${pathname}?${qs.stringify(query)}`)
    console.log('返回', query)
    return `${pathname}?${qs.stringify(query)}`;
};

export default {
    goToFilterURL,
    getGoToFilterURL,
}
