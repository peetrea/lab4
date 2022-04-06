import React, {useState} from 'react';
import Card_box from './Card_box';
import { Layout, Menu,  } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;


const Layout_content = ({setCards, cards}:{setCards:any, cards:Array<string> }) =>{
    
    const [inputName, setInputName] = useState("");
    const [inputUniversity, setInputUniversity] = useState("");
    const [inputAge, setInputAge] = useState("");
    const [inputText, setInputText] = useState("");
 


    const inputNametHandler = (e:React.ChangeEvent<HTMLInputElement>):void =>{
      setInputName(e.target.value);
    };
    const inputUniversityHandler = (e:React.ChangeEvent<HTMLInputElement>):void =>{
      setInputUniversity(e.target.value);
    };
    const inputAgeHandler = (e:React.ChangeEvent<HTMLInputElement>):void =>{
      setInputAge(e.target.value);
    };
    const inputTextHandler = (e:React.ChangeEvent<HTMLInputElement>):void =>{
      setInputText(e.target.value);
    };

    const submitHandler = (e:React.MouseEvent<HTMLButtonElement> | React.ChangeEvent<HTMLInputElement>):void =>{
      e.preventDefault();
      
      setCards([
          ...cards,
          {title:inputName, univerity:inputUniversity, age: inputAge, text: inputText}
      ]);
      
      setInputName("");
      setInputUniversity("");
      setInputAge("");
      setInputText("");
      
  };

    return(
        <Layout>
    <Header className="header">
      <div className="logo" />
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
        <Menu.Item key="1">nav 1</Menu.Item>
        <Menu.Item key="2">nav 2</Menu.Item>
        <Menu.Item key="3">nav 3</Menu.Item>
        
      </Menu>
    </Header>

    <Content style={{ padding: '0 50px' }}>

      <Layout className="site-layout-background" style={{ padding: '24px 0' }}>
        <Sider className="site-layout-background" width={200}>
          <Menu
            mode="inline"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            style={{ height: '100%' }}
        
          >
           <SubMenu key="sub1" icon={<UserOutlined />} title="Add new card:">
             <div className="card_input"><input className='input_field' value={inputName} onChange={inputNametHandler} placeholder="Nume/prenume"  type="text" /></div>
             <div className="card_input"><input className='input_field' value={inputUniversity} onChange={inputUniversityHandler} placeholder="Universitate"  type="text" /></div>
             <div className="card_input"><input className='input_field' value={inputAge} onChange={inputAgeHandler} placeholder="Varsta"  type="text" /></div>
             <div className="card_input"><input className='input_field' value={inputText} onChange={inputTextHandler} placeholder="Text"  type="text" /></div>
             <div className="card_input"> <button onClick={submitHandler} className="button-3" type="submit" >Add</button></div>
            
            </SubMenu>
           
            
        
          </Menu>
        </Sider>
        <Content style={{ padding: '0 24px', minHeight: 280 }}>
    
         <Card_box
         cards = {cards}
         />

        </Content>
      </Layout>
    </Content>
   
  </Layout>

    )
}



export default Layout_content;

