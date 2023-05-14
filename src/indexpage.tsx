import { useEffect, useState } from 'react';
import { Select} from 'antd';
import './App.css';
import { useTranslation, initReactI18next } from "react-i18next";
import { useParams ,useNavigate } from 'react-router-dom';



export default function IndexPage() {
  const {t, i18n}= useTranslation();
  const { lang } = useParams();
  
  useEffect(() => {
      i18n.changeLanguage(lang, (err, t) => {
          if (err) return console.log('something went wrong loading', err);
          t('key'); 
        });
    }, [lang, i18n]);
    const [values,setvalues] = useState("");

    const handleChange = (value: string) => {
        setvalues(value);
        localStorage.setItem("values", value); 
        window.location.href= '/' + value ;
    };
    
    useEffect(() => {
        const storedValue = localStorage.getItem("values");
        if (storedValue) {
            setvalues(storedValue);
        }
    }, []);

    let navigate = useNavigate(); 
    const routeChange = (text:string) =>{ 
        let path = text + values; 
        navigate(path);
    }
  return (
    <div className="container">
    <div className="language-bar">
    <Select
      value = {values}
      style={{ width: 120 }}
      onChange={handleChange}
      options={[
        { value: 'th', label: `${t('TH')}` },
        { value: 'en', label: `${t('EN')}` }
      ]}
    />
    </div>
      <div className="block" onClick={()=>routeChange('layout/')}>
        <div className="padding-text-detail font-weight">
          <div className='font-weight'>
            {t('Test 1')}
          </div>
          <div className='font-weight-detail'><br />
            {t("Layout & Style")}
          </div>
        </div>
      </div>
      <div className="block">
        <div className="padding-text-detail">
          <div className='font-weight'>
            {t("Test 2")}
          </div>
          <div className='font-weight-detail'><br />
            {t("Connect API")}
          </div>
        </div>
      </div>
      <div className="block" onClick={()=>routeChange('formandtable/')}>
        <div className="padding-text-detail">
          <div className='font-weight'>
            {t("Test 3")}
          </div>
          <div className='font-weight-detail'><br />
            {t("Form & Table")}
          </div>
        </div>
      </div>
    </div>
  );
}

