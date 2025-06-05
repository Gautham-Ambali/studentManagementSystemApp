import BASE_URL from "./base_Url";
import axios from 'axios';

export const getStudentsDataApi=async()=>{
  return axios.get(`${BASE_URL}/students`)
}

export const addNewStudentApi=async(data)=>{
  return axios.post(`${BASE_URL}/students`,data)
}

export const deleteStudentApi=async(id)=>{
  return axios.delete(`${BASE_URL}/students/${id}`)
}

export const updateStudentApi=async(id,data)=>{
  return axios.put(`${BASE_URL}/students/${id}`,data)
}