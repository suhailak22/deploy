import React, { useEffect, useState } from 'react'
import style from '../style/formOne.module.css'
import { DisplayData } from '../components/form'
import axios from 'axios'

const FormOne = () => {
  const [name, setName] = useState('')
  const [englishName, setEnglishName] = useState('')

  const [gender, setGender] = useState('')
  const [genderE, setGenderE] = useState('')

  const [phoneNum, setPhoneNum] = useState('')
  const [mobileNumber, setMobileNum] = useState('')

  const [role, setRole] = useState('')
  const [roleE, setRoleE] = useState('')

  const [officeAddress, setOfficeAddress] = useState('')
  const [workingAddress, setWorkingAddress] = useState('')

  const [homeAddress, setHomeAddress] = useState('')
  const [addressE, setAddressE] = useState('')

  const [department, setDepartment] = useState('')
  const [workingDepartment, setWorkingDepartment] = useState('')

  const [relative, setRelative] = useState('')
  const [realtivePhone, setRelativePhone] = useState('')

  const [relativeE, setRelativeE] = useState('')
  const [realtivePhoneE, setRelativePhoneE] = useState('')

  const [workingDate, setWorkingDate] = useState('')
  const [scheduleDate, setScheduleDate] = useState('')

  const [dob, setDOB] = useState('')
  const [dobE, setDobE] = useState('')

  const [gmentJobDate, setGmentJobDate] = useState('')
  const [methodJoining, setMethodJoining] = useState('')

  const saveData = () => {
    axios
      .post('http://localhost:6500/post', {
        பயிற்சியாளரின்பெயர்: name,
        Trainee_Name: englishName,

        பாலினம்: gender,
        Gender: genderE,

        அலைபேசி_எண்: phoneNum,
        Phone_Number: mobileNumber,

        பதவி: role,
        Position: roleE,

        பணிபுரியும்_அலுவலக_முகவரி: officeAddress,
        Working_Office_Address: workingAddress,

        வீட்டு_முகவரி: homeAddress,
        Home_Address: addressE,

        பணிபுரியும்_துறை: department,
        Department_of_work: workingDepartment,

        நெருங்கிய_உறவினரின்_பெயர்: relative,
        அலைபேசிஎண்: realtivePhone,

        பணிவரன்முறை_ஆணை_நாள்: workingDate,

        பிறந்த_தேதி: dob,

        அரசு_பணியில்_சேர்ந்த_முறை: gmentJobDate,
      })
      .then((res) => {
        console.log(res.data)
      })
      .catch((err) => console.log(err))
  }

  const data = [
    {
      Name: name,
      EnglishName: englishName,

      Gender: gender,
      GenderE: genderE,

      phoneNum: phoneNum,
      MobileNum: mobileNumber,

      role: role,
      roleE: roleE,

      officeAddress: officeAddress,
      workingAddress: workingAddress,

      homeAddress: homeAddress,
      addressE: addressE,

      department: department,
      workingDepartment: workingDepartment,

      relative: relative,
      realtivePhone: realtivePhone,

      workingDate: workingDate,

      dob: dob,

      gmentJobDate: gmentJobDate,
    },
  ]

  useEffect(() => {
    console.log('The data is ', data)
  }, [
    name,
    englishName,
    gender,
    phoneNum,
    role,
    officeAddress,
    homeAddress,
    department,
    relative,
    workingDate,
    dob,
    gmentJobDate,
  ])

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div>
      <div className={style.header}>
        <span className={style.headOne}>
          {' '}
          அரசு அலுவலர் பயிற்சி நிலையம், பவானிசாகர்
        </span>
        <span className={style.headTwo}>
          41 பணி நாட்கள் கொண்ட சுருக்கப்பட்ட அடிப்படைப் பயிற்சியில் சேருவதற்கான
          விண்ணப்பப் படிவம்
        </span>
      </div>
      <div className={style.midDiv}>
        <p>அணி:61</p>
      </div>
      <form className={style.forms} onSubmit={(e) => handleSubmit(e)}>
        <div className={style.divs}>
          <label htmlFor="name" className="col-6">
            {' '}
            1. பயிற்சியாளரின் பெயர் :
          </label>
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            type="text"
            id="name"
            className="col-6 mb-2"
            style={{ width: '250px' }}
            maxLength={50}
          />

          <label
            htmlFor="name"
            className="col-6 ps-3"
            style={{ fontSize: '16px' }}
          >
            {' '}
            Trainee's Name :
          </label>
          <input
            onChange={(e) => setEnglishName(e.target.value)}
            value={englishName}
            type="text"
            id="name"
            className="col-6 mb-2"
            style={{ width: '250px' }}
            maxLength={50}
          />
        </div>
        <div className={style.divs}>
          <label htmlFor="name" className="col-6">
            {' '}
            2. பாலினம்:
          </label>
          <input
            onChange={(e) => setGender(e.target.value)}
            value={gender}
            type="text"
            className="col-6 mb-2"
            id="name"
            style={{ width: '250px' }}
          />
          <br />
          <label
            htmlFor="name"
            className="col-6 ps-3"
            style={{ fontSize: '16px' }}
          >
            {' '}
            Gender:
          </label>
          <input
            onChange={(e) => setGenderE(e.target.value)}
            value={genderE}
            type="text"
            className="col-6 mb-2"
            id="name"
            style={{ width: '250px' }}
          />
        </div>

        <div className={style.divs}>
          <label htmlFor="name" className="col-6">
            {' '}
            3. அலைபேசி எண் / Phone Number :
          </label>
          <input
            onChange={(e) => setPhoneNum(e.target.value)}
            value={phoneNum}
            type="number"
            className="col-6 mb-2"
            id="name"
            style={{ width: '250px' }}
            maxLength={12}
          />
          <br />
        </div>
        <div className={style.divs}>
          <label htmlFor="name" className="col-6">
            {' '}
            4. பதவி :
          </label>
          <input
            onChange={(e) => setRole(e.target.value)}
            value={role}
            type="text"
            className="col-6 mb-2"
            id="name"
            style={{ width: '250px' }}
          />
          <br />
          <label
            htmlFor="name"
            className="col-6 ps-3"
            style={{ fontSize: '16px' }}
          >
            {' '}
            Position :
          </label>
          <input
            onChange={(e) => setRoleE(e.target.value)}
            value={roleE}
            type="text"
            className="col-6 mb-2"
            id="name"
            style={{ width: '250px' }}
          />
        </div>
        <div className={style.divs}>
          <label htmlFor="name" className="col-6">
            {' '}
            5. பணிபுரியும் அலுவலக முகவரி :
          </label>
          <input
            onChange={(e) => setOfficeAddress(e.target.value)}
            value={officeAddress}
            type="text"
            className="col-6 mb-2"
            id="name"
            style={{ width: '250px' }}
            maxLength={60}
          />
          <br />
          <label
            htmlFor="name"
            className="col-6 ps-3"
            style={{ fontSize: '16px' }}
          >
            {' '}
            Working Office Address:
          </label>
          <input
            onChange={(e) => setWorkingAddress(e.target.value)}
            value={workingAddress}
            type="text"
            className="col-6 mb-2"
            id="name"
            style={{ width: '250px' }}
            maxLength={60}
          />
        </div>

        <div className={style.divs}>
          <label htmlFor="name" className="col-6">
            {' '}
            6. வீட்டு முகவரி :
          </label>
          <input
            onChange={(e) => setHomeAddress(e.target.value)}
            value={homeAddress}
            type="text"
            className="col-6 mb-2"
            id="name"
            style={{ width: '250px' }}
            maxLength={50}
          />
        </div>

        <div className={style.divs}>
          <label
            htmlFor="name"
            className="col-6 ps-3"
            style={{ fontSize: '16px' }}
          >
            {' '}
            Home Address :
          </label>
          <input
            onChange={(e) => setAddressE(e.target.value)}
            value={addressE}
            type="text"
            className="col-6 mb-2"
            id="name"
            style={{ width: '250px' }}
            maxLength={50}
          />
        </div>

        <div className={style.divs}>
          <label htmlFor="name" className="col-6">
            {' '}
            7. பணிபுரியும் துறை :
          </label>
          <input
            onChange={(e) => setDepartment(e.target.value)}
            value={department}
            type="text"
            className="col-6 mb-2"
            id="name"
            style={{ width: '250px' }}
          />
          <br />
          <label
            htmlFor="name"
            className="col-6 ps-3"
            style={{ fontSize: '16px' }}
          >
            {' '}
            Department of work :
          </label>
          <input
            onChange={(e) => setWorkingDepartment(e.target.value)}
            value={workingDepartment}
            type="text"
            className="col-6 mb-2"
            id="name"
            style={{ width: '250px' }}
          />
        </div>
        <div className={style.divs}>
          <label htmlFor="name" className="col-6">
            {' '}
            8. நெருங்கிய உறவினரின் பெயர் &
          </label>
          <input
            onChange={(e) => setRelative(e.target.value)}
            value={relative}
            type="text"
            className="col-6 mb-2"
            id="name"
            style={{ width: '250px' }}
          />
          <label htmlFor="name" className="col-6 ps-3">
            {' '}
            அலைபேசி எண் :
          </label>
          <input
            onChange={(e) => setRelativePhone(e.target.value)}
            value={realtivePhone}
            type="number"
            className="col-6 mb-2"
            id="name"
            style={{ width: '250px' }}
          />
        </div>

        <div className={style.divs}>
          <label htmlFor="name" className="col-6">
            {' '}
            9. பணிவரன்முறை ஆணை நாள் :
          </label>
          <input
            onChange={(e) => setWorkingDate(e.target.value)}
            value={workingDate}
            type="date"
            className="col-6 mb-2"
            id="name"
            style={{ width: '250px' }}
          />
        </div>

        <div className={style.divs}>
          <label htmlFor="name" className="col-6">
            {' '}
            10. பிறந்த தேதி(பயிற்சியில் சேரும் நாளன்று நிறைவடைந்த வயது) :
          </label>
          <input
            onChange={(e) => setDOB(e.target.value)}
            value={dob}
            type="text"
            className="col-6 mb-2"
            id="name"
            style={{ width: '250px' }}
          />
        </div>

        <div className={style.divs}>
          <label htmlFor="name" className="col-6">
            {' '}
            11. அரசு பணியில் சேர்ந்த முறை:
          </label>
          <input
            onChange={(e) => setGmentJobDate(e.target.value)}
            value={gmentJobDate}
            type="text"
            className="col-6 mb-2"
            id="name"
            style={{ width: '250px' }}
          />
        </div>

        <button type="submit" onClick={saveData}>
          <DisplayData data={data} />
        </button>
      </form>
    </div>
  )
}

export default FormOne

export function Data() {}
