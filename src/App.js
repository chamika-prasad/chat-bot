import ChatBot from "react-simple-chatbot";
import { ThemeProvider } from 'styled-components';
import { Segment } from "semantic-ui-react";

function App() {

  const theme = {
    background: '#f5f8fb',
    fontFamily: 'Helvetica Neue',
    headerBgColor: 'black',
    
    headerFontColor: '#fff',
    headerFontSize: '15px',
    botBubbleColor: '#EF6C00',
    botFontColor: '#fff',
    userBubbleColor: '#fff',
    userFontColor: '#4a4a4a',
  };

  const config ={
    width: "400px",
    height: "500px",
    floating: true,
    // botAvatar:"guidme_logo.png",
    // avatarStyle:{
    //   width:"10px",
    //   height:"25px",
    // }
    opened:true
  };

  const steps = [
    {
      id: "Greet",

      message: "Hello, Welcome to our shop",

      trigger: "Done",
    },

    {
      id: "Done",

      message: "Please enter your name!",

      trigger: "waiting1",
    },

    {
      id: "waiting1",

      user: true,

      trigger: "Name",
    },

    {
      id: "Name",

      message: "Hi {previousValue}, Please select your issue",

      trigger: "issues",
    },

    {
      id: "issues",

      options: [
        {
          value: "React",

          label: "React",

          trigger: "React",
        },

        { value: "Angular", label: "Angular", trigger: "Angular" },
      ],
    },

    {
      id: "React",

      message:
        "Thanks for letting your React issue, Our team will resolve your issue ASAP",

      end: true,
    },

    {
      id: "Angular",

      message:
        "Thanks for letting your Angular issue, Our team will resolve your issue ASAP",

      end: true,
    },
  ];
  return (
    <>
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} headerTitle="Hello World" {...config}/>
        </ThemeProvider>
    </>
  );
}

export default App;
