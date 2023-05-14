import '../../App.css';
import { useTranslation } from "react-i18next";
import { useParams  } from 'react-router-dom';
import { Select , Button } from 'antd';
import { useEffect, useState } from 'react';

function HeaderPage() {
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
  window.location.href= '/' + value + '/formandtable/' + value;
};

const backtoindex = () =>{
  const storedValue = localStorage.getItem("values");
  window.location.href= '/' + storedValue;
}

useEffect(() => {
  const storedValue = localStorage.getItem("values");
    if (storedValue) {
        setvalues(storedValue);
    }
}, []);

  return (
    <>
    <div className="language-bar">
          <Select
              value={values}
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                  { value: 'th', label: `${t('TH')}` },
                  { value: 'en', label: `${t('EN')}` }
              ]} />
              </div>
              
    <b className='font-size-layout'>{t("Form & Table")}</b>
    <div>
      <Button className='button_index' onClick={backtoindex}>
          {t("IndexPage")}
      </Button>
    </div>
              </>
  )
}

export default HeaderPage