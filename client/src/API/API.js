import axios from 'axios';
import cookies from 'universal-cookie';
// universal cookies are removed with vanila js default cookie
// see enterPass or home pahe folder
const api = axios.create({
    baseURL: 'http://localhost:3000/api',
});

const config = {
    headers: { Authorization: `Bearer ${new cookies().get('myCat')}` },
};

export const authUser = payload => api.post('auth-user', payload);
export const createUser = payload => api.post('create-user', payload);
export const imageUpload = payload => api.post('upload-image', payload, config);
export const getImages = payload => api.post('get-uploads',payload,config);

const apis = {
    authUser,
    createUser,
    imageUpload,
    config,
    getImages
}

export default apis;
