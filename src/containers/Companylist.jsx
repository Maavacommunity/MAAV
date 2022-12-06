import React, { useState } from 'react'
import axios from 'axios'
//import md5 from 'md5'
import { useDispatch } from 'react-redux'
import { useToasts } from 'react-toast-notifications'
import CompanylistComponent from '../components/Companylist'
import { companylist } from '../actions/companylist'
import { useNavigate} from 'react-router-dom'
const Companylist = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { addToast } = useToasts()
  const [company , setCompany] = useState ();
  
  const handleSubmit = async(e) => {
    e.preventDefault();
    // const data = new FormData()
    // data.append('grade', grade)
    if (company) {
   console.log(company)
      
      navigate('/documents')
    }
    else{
      console.error(  'error')
    }
  }

  const UkCompany = [
    'Company 1 of Uk',
    'Company 2 of Uk',
    'Company 3 of Uk',
    'Company 4 of Uk',
    'Company 5 of Uk',
    'Company 6 of Uk',
    'Company 7 of Uk',
    'Company 8 of Uk',
    'Company 9 of Uk',
    'Company 10 of Uk',
    
  ];
  const UsCompany = [
    'Company 1 of Us',
    'Company 2 of Us',
    'Company 3 of Us',
    'Company 4 of Us',
    'Company 5 of Us',
    'Company 6 of Us',
    'Company 7 of Us',
    'Company 8 of Us',
    'Company 9 of Us',
    'Company 10 of Us',
    
  ];

  const SwedenCompany = [
    'Company 1 of Sweden',
    'Company 2 of Sweden',
    'Company 3 of Sweden',
    'Company 4 of Sweden',
    'Company 5 of Sweden',
    'Company 6 of Sweden',
    'Company 7 of Sweden',
    'Company 8 of Sweden',
    'Company 9 of Sweden',
    'Company 10 of Sweden',
    
  ];
  const ChinaCompany = [
    'Company 1 of China',
    'Company 2 of China',
    'Company 3 of China',
    'Company 4 of China',
    'Company 5 of China',
    'Company 6 of China',
    'Company 7 of China',
    'Company 8 of China',
    'Company 9 of China',
    'Company 10 of China',
    
  ];
  const CanadaCompany = [
    'Company 1 of Canada',
    'Company 2 of Canada',
    'Company 3 of Canada',
    'Company 4 of Canada',
    'Company 5 of Canada',
    'Company 6 of Canada',
    'Company 7 of Canada',
    'Company 8 of Canada',
    'Company 9 of Canada',
    'Company 10 of Canada',
    
  ];

  const GermanyCompany = [
    'Company 1 of Germany',
    'Company 2 of Germany',
    'Company 3 of Germany',
    'Company 4 of Germany',
    'Company 5 of Germany',
    'Company 6 of Germany',
    'Company 7 of Germany',
    'Company 8 of Germany',
    'Company 9 of Germany',
    'Company 10 of Germany',
    
  ];
  const AustraliaCompany = [
    'Company 1 of Australia',
    'Company 2 of Australia',
    'Company 3 of Australia',
    'Company 4 of Australia',
    'Company 5 of Australia',
    'Company 6 of Australia',
    'Company 7 of Australia',
    'Company 8 of Australia',
    'Company 9 of Australia',
    'Company 10 of Australia',
    
  ];


  return (
    <CompanylistComponent 
   UkCompany={UkCompany}
   UsCompany={UsCompany}
   SwedenCompany={SwedenCompany}
   ChinaCompany={ChinaCompany}
   CanadaCompany={CanadaCompany}
   GermanyCompany={GermanyCompany}
   AustraliaCompany={AustraliaCompany}
   company={company}
   setCompany={setCompany}
  //getGrade={getGrade}
   handleSubmit={handleSubmit}
    />
  )
}

export default Companylist