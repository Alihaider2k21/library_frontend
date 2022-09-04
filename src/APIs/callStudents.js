import http from "../services/httpService";

export const students = async () => {
  let res = http.get("http://localhost:5000/student");
  return res;
};
export const getStudentbyid = (id) => {
  return http.get(`http://localhost:5000/student/${id}`);
};
export const postStudent = (student) => {
  if (student.id) {
    const body = { ...student };
    delete body.id;
    return http.put(`http://localhost:5000/student/${student.id}`, body);
  } else {
    return http.post("http://localhost:5000/student", student);
  }
};

export const deleteStudent = (id) => {
  return http.delete(`http://localhost:5000/student/${id}`);
};
