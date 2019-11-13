const XLSX = require('xlsx')
const Volunteer = require('./db')

const workBook = XLSX.readFile('./NO10.xlsx') 
const sheetNames = workBook.SheetNames;    
const workSheet = workBook.Sheets[sheetNames[0]]
const workObj = XLSX.utils.sheet_to_json(workSheet)
const weeks = '10'      //周数
for(let i =0,length = workObj.length; i< length;i++){
    const studentInfo ={
        //个人信息
        Sname: workObj[i]['姓名'],
        College:workObj[i]['学院'],
        Class:workObj[i]['班级'],
        Number:workObj[i]['学号'],
        //志愿信息
        Weeks:weeks,
        Category:workObj[i]['服务类别'],
        proName: workObj[i]['服务项目名称'],
        Time:workObj[i]['单项时长']
    }
Volunteer.create(studentInfo,(err,docs)=>{
    if(err){
        console.log(err);
        return
    }
    console.log('ok');
})
}