import React, { useState } from 'react'
import {
  BlobProvider,
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  Font,
} from '@react-pdf/renderer'

import TamilFont from '../Tamil Font/TiroTamil-Regular.ttf'

export function DisplayData({ data }) {
  Font.register({
    family: 'TamilFamily',
    src: TamilFont,
  })

  const DataFromForm = data

  const style = StyleSheet.create({
    body: {
      fontFamily: 'TamilFamily',

      '@media max-width:780': {
        border: '3px solid blue',
        fontFamily: 'TamilFamily',
      },
    },
    header: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      marginTop: '25px',
      gap: '2px',
      fontFamily: 'TamilFamily',
    },
    headingOne: {
      color: 'blue',
      fontSize: '30px',
      fontFamily: 'TamilFamily',

      '@media max-width:780': {
        color: 'blue',
        fontSize: '15px',
      },
    },
    headingTwo: {
      color: 'blue',
      fontSize: '18px',
      fontFamily: 'TamilFamily',

      '@media max-width:780': {
        color: 'blue',
        fontSize: '10px',
      },
    },

    secondRow: {
      color: 'blue',
      display: 'flex',
      width: '80%',
      justifyContent: 'space-between',
      margin: 'auto',
      fontFamily: 'TamilFamily',
      '@media max-width:780': {
        flexDirection: 'row',
        width: '80%',
        marginTop: '11px',
      },
    },

    secondRowTextOne: {
      '@media max-width:780': {
        fontSize: '11px',
      },
    },
    secondRowTextTwo: {
      '@media max-width:780': {
        fontSize: '11px',
      },
    },

    form: {
      border: '2px solid red',
      display: 'flex',
      justifyContent: 'space-between',
      width: '95%',
      margin: 'auto',
      marginTop: '25px',
      fontFamily: 'TamilFamily',
      '@media max-width:780': {
        border: 'none',
        fontSize: '12px',
        marginTop: '-275px',
        paddingLeft: '25px',
        width: '97%',
      },
    },

    division: {
      display: 'flex',
      flexDirection: 'row',
      marginLeft: '3px',
    },

    ParentDivision: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: '5px',
    },

    NumberText: {
      color: 'blue',
    },

    SemicolonDiv: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  })

  const Forms = () => {
    const [server, setServer] = useState(DataFromForm)
    console.log('DataFrom Fetched FormOne ', server)
    return (
      <Document>
        <Page size="A4" style={style.body}>
          <View style={style.header}>
            <Text style={style.headingOne}>
              அரசு அலுவலர் பயிற்சி நிலையம், பவானிசாகர்
            </Text>
            <br />
            <Text style={style.headingTwo}>
              41 பணி நாட்கள் கொண்ட சுருக்கப்பட்ட அடிப்படைப் பயிற்சியில்
              சேருவதற்கான விண்ணப்பப் படிவம்{' '}
            </Text>
          </View>
          <br />
          <View style={style.secondRow}>
            <Text style={style.secondRowTextOne}>அணி:61</Text>
          </View>
          <View style={style.form}>
            {server.map((items, index) => (
              <View key={index}>
                <View style={style.ParentDivision}>
                  <Text style={style.NumberText}>1.</Text>
                  <View style={style.division}>
                    <View style={style.SemicolonDiv}>
                      <Text style={{ fontSize: '10px', width: '43%' }}>
                        {' '}
                        பயிற்சியாளரின் பெயர்
                      </Text>
                      <Text>:</Text>
                    </View>
                    <Text
                      style={{ width: '40%', marginLeft: '5px', color: 'blue' }}
                    >
                      {items.Name}
                    </Text>
                  </View>
                </View>

                <View style={style.ParentDivision}>
                  <View style={style.division}>
                    <View style={style.SemicolonDiv}>
                      <Text
                        style={{
                          fontSize: '10px',
                          width: '43%',
                          paddingLeft: '3px',
                          marginLeft: '6px',
                        }}
                      >
                        {' '}
                        Trainee's Name
                      </Text>
                      <Text>:</Text>
                    </View>
                    <Text
                      style={{ width: '40%', marginLeft: '5px', color: 'blue' }}
                    >
                      {items.EnglishName}
                    </Text>
                  </View>
                </View>

                <br />
                <View style={style.ParentDivision}>
                  <Text style={style.NumberText}>2.</Text>
                  <View style={style.division}>
                    <View style={style.SemicolonDiv}>
                      <Text style={{ fontSize: '10px', width: '42.8%' }}>
                        பாலினம்
                      </Text>
                      <Text>:</Text>
                    </View>

                    <Text
                      style={{ marginLeft: '5px', width: '40%', color: 'blue' }}
                    >
                      {items.Gender}
                    </Text>
                  </View>
                </View>

                <View style={style.ParentDivision}>
                  <View style={style.division}>
                    <View style={style.SemicolonDiv}>
                      <Text
                        style={{
                          fontSize: '10px',
                          width: '43%',
                          paddingLeft: '3px',
                          marginLeft: '6px',
                        }}
                      >
                        Gender
                      </Text>
                      <Text>:</Text>
                    </View>

                    <Text
                      style={{ marginLeft: '5px', width: '40%', color: 'blue' }}
                    >
                      {items.GenderE}
                    </Text>
                  </View>
                </View>

                <View style={style.ParentDivision}>
                  <Text style={style.NumberText}>3.</Text>
                  <View style={style.division}>
                    <View style={style.SemicolonDiv}>
                      <Text style={{ fontSize: '10px', width: '42.8%' }}>
                        அலைபேசி எண்/Mobile Number
                      </Text>{' '}
                      <Text>:</Text>
                    </View>

                    <Text
                      style={{ width: '40%', marginLeft: '5px', color: 'blue' }}
                    >
                      {items.phoneNum}
                    </Text>
                  </View>
                </View>

                <View style={style.ParentDivision}>
                  <Text style={style.NumberText}>4.</Text>
                  <View style={style.division}>
                    <View style={style.SemicolonDiv}>
                      <Text style={{ fontSize: '10px', width: '42.8%' }}>
                        பதவி{' '}
                      </Text>
                      <Text>:</Text>
                    </View>
                    <Text
                      style={{ marginLeft: '5px', width: '40%', color: 'blue' }}
                    >
                      {items.role}
                    </Text>
                    <br />
                  </View>
                </View>

                <View style={style.ParentDivision}>
                  <View style={style.division}>
                    <View style={style.SemicolonDiv}>
                      <Text
                        style={{
                          fontSize: '10px',
                          width: '43%',
                          paddingLeft: '3px',
                          marginLeft: '6px',
                        }}
                      >
                        Position{' '}
                      </Text>
                      <Text>:</Text>
                    </View>
                    <Text
                      style={{ marginLeft: '5px', width: '40%', color: 'blue' }}
                    >
                      {items.roleE}
                    </Text>
                    <br />
                  </View>
                </View>

                <View style={style.ParentDivision}>
                  <Text style={style.NumberText}>5.</Text>
                  <View style={style.division}>
                    <View style={style.SemicolonDiv}>
                      <Text style={{ fontSize: '10px', width: '42.8%' }}>
                        பணிபுரியும் அலுவலக முகவரி
                      </Text>{' '}
                      <Text>:</Text>
                    </View>
                    <Text
                      style={{ width: '40%', marginLeft: '5px', color: 'blue' }}
                    >
                      {items.officeAddress}
                    </Text>
                  </View>
                </View>

                <View style={style.ParentDivision}>
                  <View style={style.division}>
                    <View style={style.SemicolonDiv}>
                      <Text
                        style={{
                          fontSize: '10px',
                          width: '43%',
                          paddingLeft: '3px',
                          marginLeft: '6px',
                        }}
                      >
                        Working Office Address
                      </Text>{' '}
                      <Text>:</Text>
                    </View>
                    <Text
                      style={{ width: '40%', marginLeft: '5px', color: 'blue' }}
                    >
                      {items.workingAddress}
                    </Text>
                  </View>
                </View>

                <View style={style.ParentDivision}>
                  <Text style={style.NumberText}>6.</Text>
                  <View style={style.division}>
                    <View style={style.SemicolonDiv}>
                      <Text style={{ fontSize: '10px', width: '42.8%' }}>
                        வீட்டு முகவரி{' '}
                      </Text>
                      <Text>:</Text>
                    </View>

                    <Text
                      style={{ width: '40%', marginLeft: '5px', color: 'blue' }}
                    >
                      {items.homeAddress}
                    </Text>
                  </View>
                </View>

                <View style={style.ParentDivision}>
                  <View style={style.division}>
                    <View style={style.SemicolonDiv}>
                      <Text
                        style={{
                          fontSize: '10px',
                          width: '43%',
                          paddingLeft: '3px',
                          marginLeft: '6px',
                        }}
                      >
                        Home Address
                      </Text>
                      <Text>:</Text>
                    </View>

                    <Text
                      style={{ width: '40%', marginLeft: '5px', color: 'blue' }}
                    >
                      {items.addressE}
                    </Text>
                  </View>
                </View>

                <View style={style.ParentDivision}>
                  <Text style={style.NumberText}>7.</Text>
                  <View style={style.division}>
                    <View style={style.SemicolonDiv}>
                      <Text style={{ fontSize: '10px', width: '43%' }}>
                        பணிபுரியும் துறை
                      </Text>{' '}
                      <Text>:</Text>
                    </View>
                    <Text
                      style={{ width: '40%', marginLeft: '5px', color: 'blue' }}
                    >
                      {items.department}
                    </Text>
                  </View>
                </View>

                <View style={style.ParentDivision}>
                  <View style={style.division}>
                    <View style={style.SemicolonDiv}>
                      <Text
                        style={{
                          fontSize: '10px',
                          width: '43%',
                          paddingLeft: '3px',
                          marginLeft: '6px',
                        }}
                      >
                        Department of work
                      </Text>{' '}
                      <Text>:</Text>
                    </View>
                    <Text
                      style={{ width: '40%', marginLeft: '5px', color: 'blue' }}
                    >
                      {items.workingDepartment}
                    </Text>
                  </View>
                </View>

                <View style={style.ParentDivision}>
                  <Text style={style.NumberText}>8.</Text>
                  <View style={style.division}>
                    <View style={style.SemicolonDiv}>
                      <Text style={{ fontSize: '10px', width: '42.8%' }}>
                        நெருங்கிய உறவினரின் பெயர் &{' '}
                      </Text>
                      <Text>:</Text>
                    </View>
                    <Text
                      style={{ marginLeft: '5px', width: '40%', color: 'blue' }}
                    >
                      {items.relative}
                    </Text>
                  </View>
                </View>

                <View style={style.ParentDivision}>
                  <View style={style.division}>
                    <View style={style.SemicolonDiv}>
                      <Text
                        style={{
                          fontSize: '10px',
                          width: '43%',
                          marginLeft: '5px',
                        }}
                      >
                        அலைபேசி எண்{' '}
                      </Text>
                      <Text>:</Text>
                    </View>
                    <Text
                      style={{
                        marginLeft: '10px',
                        width: '40%',
                        color: 'blue',
                      }}
                    >
                      {items.realtivePhone}
                    </Text>
                  </View>
                </View>

                <View style={style.ParentDivision}>
                  <Text style={style.NumberText}>9.</Text>
                  <View style={style.division}>
                    <View style={style.SemicolonDiv}>
                      <Text style={{ fontSize: '10px', width: '42.8%' }}>
                        பணிவரன்முறை ஆணை நாள்
                      </Text>{' '}
                      <Text>:</Text>
                    </View>
                    <Text
                      style={{ marginLeft: '5px', width: '40%', color: 'blue' }}
                    >
                      {items.workingDate}
                    </Text>
                  </View>
                </View>

                <View style={style.ParentDivision}>
                  <Text style={style.NumberText}>10.</Text>
                  <View style={style.division}>
                    <View style={style.SemicolonDiv}>
                      <Text style={{ fontSize: '10px', width: '42.3%' }}>
                        பிறந்த தேதி(பயிற்சியில் சேரும் நாளன்று_நிறைவடைந்த வயது)
                      </Text>{' '}
                      <Text>:</Text>
                    </View>
                    <Text
                      style={{ width: '40%', marginLeft: '5px', color: 'blue' }}
                    >
                      {items.dob}
                    </Text>
                  </View>
                </View>

                <View style={style.ParentDivision}>
                  <Text style={style.NumberText}>11.</Text>
                  <View style={style.division}>
                    <View style={style.SemicolonDiv}>
                      <Text style={{ fontSize: '10px', width: '42.4%' }}>
                        அரசு பணியில் சேர்ந்த முறை
                      </Text>{' '}
                      <Text>:</Text>
                    </View>

                    <Text
                      style={{ width: '40%', marginLeft: '5px', color: 'blue' }}
                    >
                      {items.gmentJobDate}
                    </Text>
                  </View>
                </View>
              </View>
            ))}
          </View>
        </Page>
      </Document>
    )
  }

  const handleDownload = () => {
    const style = StyleSheet.create({
      body: {
        border: '5px solid red',
        fontFamily: 'TamilFamily',
      },
      header: {
        border: '1px solid red',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '25px',
        gap: '2px',
        fontFamily: 'TamilFamily',
      },
      headingOne: {
        color: 'blue',
        fontSize: '30px',
        fontFamily: 'TamilFamily',
      },
      secondRow: {
        border: '1px solid red',
        color: 'blue',
        display: 'flex',
        width: '80%',
        justifyContent: 'space-between',
        margin: 'auto',
        fontFamily: 'TamilFamily',
      },
      form: {
        border: '2px solid red',
        display: 'flex',
        justifyContent: 'space-between',
        width: '80%',
        margin: 'auto',
        marginTop: '25px',
        fontFamily: 'TamilFamily',
      },
    })
    return (
      <BlobProvider document={<Forms />} style={style}>
        {({ blob, url, loading, error }) => {
          if (loading) {
            // return <div>Loading...</div>;
          }
          return (
            <a
              href={url}
              download="FormDatas.pdf"
              className="btn btn-success mt-2 mb-2"
            >
              Submit & Download
            </a>
          )
        }}
      </BlobProvider>
    )
  }

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: '25px',
        }}
      >
        {handleDownload()}
      </div>
    </div>
  )
}
