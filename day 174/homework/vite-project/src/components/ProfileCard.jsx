import { useState } from 'react'

const ProfileCard = () => {
    const [userData, setUserData] = useState({ name: 'andriaPartsvania', age: '17', city: 'Tbilisi' })
    const [cities] = useState([
        "Tbilisi",
        "Batumi",
        "Kutaisi",
        "Rustavi",
        "Zugdidi",
        "Gori",
        "Poti",
        "Kobuleti",
        "Khashuri",
        "Samtredia",
        "Senaki",
        "Marneuli",
        "Telavi",
        "Ozurgeti",
        "Akhaltsikhe",
        "Chiatura",
        "Sagarejo",
        "Gardabani",
        "Borjomi",
        "Tkibuli",
        "Khoni",
        "Bolnisi",
        "Akhalkalaki"
        ])
    const [selectedCity, setSelectedCity] = useState('')
    const [error, setError] = useState('')
  return (
    <div>
        <div>
            <p>username: {userData.name}</p>
            <p>age: {userData.age}</p>
            <p>city: {userData.city}</p>
        </div>


        <div>
            <select value={selectedCity} onChange={(e) => setSelectedCity(e.target.value)}>
                <option value={''}>Select a city</option>
                {cities.map((item) => (
                    <option key={item} value={item}>{item}</option>
                ))}
            </select>

            <button onClick={() => {
                if(selectedCity === ''){
                    setError('you must select a country')
                    return
                }else{
                    setError('')
                    setUserData(prev => ({ ...prev, city: selectedCity}))
                }
            }}>change city</button>
            <p className='text-[red] font-medium'>{error}</p>
        </div>
    </div>
  )
}

export default ProfileCard