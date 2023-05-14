import React from 'react';
import '../../App.css';
import { Select, Col, Divider, Row,Button } from 'antd';
import { useEffect, useState } from 'react';
import { useTranslation } from "react-i18next";
import { useParams  } from 'react-router-dom';




export default function Layoutpage() {
    const random_num = () => {
        setButtonItems((prevItems) => {
          const randomnum: number[] = [];
          while (randomnum.length < 6) {
            const randomNumber = Math.floor(Math.random() * 6);
            if (!randomnum.includes(randomNumber)) {
              randomnum.push(randomNumber);
            }
          }
          const tmp_item = randomnum.map((index) => button_item[index]);
          return tmp_item;
        });
        setcountindex((prevCount) => (prevCount + 1) % 6);
    };
    const [button_item, setButtonItems] = useState([
        { key: 1, content: <><Button className='buttonlayout' onClick={random_num} ><div className='block_arrow'></div></Button></> },
        { key: 2, content: <><Button className='buttonlayout' onClick={random_num} ><div className='circle_arrow'></div></Button></> },
        { key: 3, content: <><Button className='buttonlayout' onClick={random_num} ><div className='Ellipse_arrow'></div></Button></> },
        { key: 4, content: <><Button className='buttonlayout' onClick={random_num} ><div className='trapezoid'></div></Button></> },
        { key: 5, content: <><Button className='buttonlayout' onClick={random_num} ><div className='block_long_arrow'></div></Button></> },
        {key: 6, content: <><Button className='buttonlayout' onClick={random_num} ><div className='parallelogram'></div></Button></> },
    ]);

    const items = [
        { key: 1, content: <><Col span={8}></Col><Col span={4}>{button_item[0].content}</Col><Col span={4}>{button_item[1].content}</Col><Col span={4}>{button_item[2].content}</Col><Col span={4}></Col><Col span={4}>{button_item[3].content}</Col><Col span={4}>{button_item[4].content}</Col><Col span={4}>{button_item[5].content}</Col></> },
        { key: 2, content: <><Col span={8}></Col><Col span={4}>{button_item[1].content}</Col><Col span={4}>{button_item[2].content}</Col><Col span={4}>{button_item[3].content}</Col><Col span={4}></Col><Col span={4}>{button_item[4].content}</Col><Col span={4}>{button_item[5].content}</Col><Col span={4}>{button_item[0].content}</Col></> },
        { key: 3, content: <><Col span={8}></Col><Col span={4}>{button_item[2].content}</Col><Col span={4}>{button_item[3].content}</Col><Col span={4}>{button_item[4].content}</Col><Col span={4}></Col><Col span={4}>{button_item[5].content}</Col><Col span={4}>{button_item[0].content}</Col><Col span={4}>{button_item[1].content}</Col></> },
        { key: 4, content: <><Col span={8}></Col><Col span={4}>{button_item[3].content}</Col><Col span={4}>{button_item[4].content}</Col><Col span={4}>{button_item[5].content}</Col><Col span={4}></Col><Col span={4}>{button_item[0].content}</Col><Col span={4}>{button_item[1].content}</Col><Col span={4}>{button_item[2].content}</Col></> },
        { key: 5, content: <><Col span={8}></Col><Col span={4}>{button_item[4].content}</Col><Col span={4}>{button_item[5].content}</Col><Col span={4}>{button_item[0].content}</Col><Col span={4}></Col><Col span={4}>{button_item[1].content}</Col><Col span={4}>{button_item[2].content}</Col><Col span={4}>{button_item[3].content}</Col></>},
        { key: 6, content: <><Col span={8}></Col><Col span={4}>{button_item[5].content}</Col><Col span={4}>{button_item[0].content}</Col><Col span={4}>{button_item[1].content}</Col><Col span={4}></Col><Col span={4}>{button_item[2].content}</Col><Col span={4}>{button_item[3].content}</Col><Col span={4}>{button_item[4].content}</Col></>},
    ];

    const toggle_items = [
        { key: 1, content: <><Col span={4} >{button_item[0].content}</Col>
            <Col span={4} >{button_item[1].content}</Col>
            <Col span={4} >{button_item[2].content}</Col></>,
            content_2: <><Col span={4} ></Col><Col span={4} >{button_item[3].content}</Col>
            <Col span={4} >{button_item[4].content}</Col>
            <Col span={4} >{button_item[5].content}</Col></> },
        { key: 2, content: <><Col span={4}>{button_item[1].content}</Col><Col span={4}>{button_item[2].content}</Col><Col span={4}>{button_item[3].content}</Col></>,content_2: <><Col span={4} ></Col>
            <Col span={4}>{button_item[4].content}</Col><Col span={4}>{button_item[5].content}</Col><Col span={4}>{button_item[0].content}</Col></> },
        { key: 3, content: <><Col span={4}>{button_item[2].content}</Col><Col span={4}>{button_item[3].content}</Col><Col span={4}>{button_item[4].content}</Col></>,content_2: <><Col span={4}></Col><Col span={4}>{button_item[5].content}</Col><Col span={4}>{button_item[0].content}</Col><Col span={4}>{button_item[1].content}</Col></> },
        { key: 4, content: <><Col span={4}>{button_item[3].content}</Col><Col span={4}>{button_item[4].content}</Col><Col span={4}>{button_item[5].content}</Col></>,content_2: <><Col span={4}></Col><Col span={4}>{button_item[0].content}</Col><Col span={4}>{button_item[1].content}</Col><Col span={4}>{button_item[2].content}</Col></> },
        { key: 5, content: <><Col span={4}>{button_item[4].content}</Col><Col span={4}>{button_item[5].content}</Col><Col span={4}>{button_item[0].content}</Col></>,content_2: <><Col span={4}></Col><Col span={4}>{button_item[1].content}</Col><Col span={4}>{button_item[2].content}</Col><Col span={4}>{button_item[3].content}</Col></>},
        { key: 6, content: <><Col span={4}>{button_item[5].content}</Col><Col span={4}>{button_item[0].content}</Col><Col span={4}>{button_item[1].content}</Col></>,content_2: <><Col span={4}></Col><Col span={4}>{button_item[2].content}</Col><Col span={4}>{button_item[3].content}</Col><Col span={4}>{button_item[4].content}</Col></>},
    ];
    const {t, i18n}= useTranslation();
    const { lang } = useParams();
    const [countindex,setcountindex] = useState(0);
    const [state,setstate] = useState(0);

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
          window.location.href= '/' + value + '/layout/' + value;
    };
      
    useEffect(() => {
        const storedValue = localStorage.getItem("values");
          if (storedValue) {
              setvalues(storedValue);
          }
    }, []);
      
    const step_left = () => {
        if(countindex >= 5){
            setcountindex(0);
        }
        else{
        setcountindex(countindex+1);
        }
    };

    const step_right = () => {
        if(countindex <= 0)
            setcountindex(5);
        else
            setcountindex(countindex-1);
        
    };

    const toggle_state = () => {
        if(state === 0)
            setstate(1)
        else if(state === 1)
            setstate(0)
    };

  return (
    <><div className="language-bar">
          <Select
              value={values}
              style={{ width: 120 }}
              onChange={handleChange}
              options={[
                  { value: 'th', label: `${t('TH')}` },
                  { value: 'en', label: `${t('EN')}` }
              ]} /></div>
              <b className='font-size-layout'>{t("Layout & Style")}</b>
    <Row justify="center" gutter={[16, 0]}>
        <Col span={4} ><Button className='buttonlayout' onClick={step_left}><div className='left_arrow'></div><div className='center_block'><div className='center_text'>{t("Move shape")}</div></div></Button></Col>
        <Col span={8} ><Button className='buttonlayout' onClick={toggle_state} ><span className='up_arrow'></span><div className='center_block'><div className='center_text'>{t("Move Position")}</div></div><span className='down_arrow'></span></Button></Col>
        <Col span={4} ><Button className='buttonlayout' onClick={step_right}><div className='right_arrow'></div><div className='center_block'><div className='center_text'>{t("Move shape")}</div></div></Button></Col>
    </Row>
    <Divider/>
        {state === 0 && (
    <Row justify="center" gutter={[16, 0]}>
        {
        items.map((item, key) => (
        <React.Fragment key={key}>
            {key === countindex && item.content}
        </React.Fragment>
        ))}
    </Row> )
        }
        {state === 1 && (
        <>
    <Row justify="center" gutter={[16, 0]}>
        {
        toggle_items.map((item, key) => (
            <React.Fragment key={key}>
                {key === countindex && item.content}
            </React.Fragment>
        ))}
    </Row>
    <Row justify="center" gutter={[16, 0]}>
        {   
        toggle_items.map((item, key) => (
            <React.Fragment key={key}>
                {key === countindex && item.content_2}
            </React.Fragment>
        ))}
    </Row></>
        )}</>
  )
}

