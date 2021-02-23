import './App.css';
import React, {useState} from "react";
import MemberForm from "./components/MemberForm"
import Member from "./components/Member"

const initialValue = {
  fname: "",
  lname: "",
  email: "",
  codename: "",
  position: "",
}

const initialMembers = [
  {
    fname: "Anas",
    lname: "Abdelsalam",
    email: "aabdelsalam57@gmail.com",
    codename: "Tech",
    position: "General",
  },
  {
    fname: "Adrian",
    lname: "Ang",
    email: "adang0515@gmail.com",
    codename: "The Great Cleave",
    position: "Commander",
  },
  {
    fname: "Jason",
    lname: "Corchado",
    email: "jasoncorchado@gmail.com",
    codename: "Ef Bee Dubb",
    position: "General",
  }
]

function App() {

  const [members, setMembers] = useState(initialMembers)
  const [formValues, setFormValues] = useState(initialValue)

  const formUpdate = (key, value) => {
    setFormValues({
      ...formValues,
      [key]:value
    })
  }

  const formSubmit = () => {
    const newMember = {
      fname: formValues.fname.trim(),
      lname: formValues.lname.trim(),
      email: formValues.email.trim(),
      codename: formValues.codename.trim(),
      position: formValues.position.trim(),
    }

    if (!newMember.fname || !newMember.lname || !newMember.email || !newMember.codename || !newMember.position){
      return;
    } 

    setMembers([...members, newMember])
    setFormValues(initialValue)
  }

  return (
    <div className="App">
      <MemberForm 
        values={formValues}
        update={formUpdate}
        submit={formSubmit}
      />

      {members.map(((member, index) => {
        return <Member key={index} value={member} />
      }))}
    </div>
  );
}

export default App;
