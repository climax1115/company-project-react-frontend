/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        Inter: ["Inter", "sans-serif"]
      },
      backgroundImage: {
        'logo-header': "url('assets/images/Intellitek_Systems LOGO.Shadow.png')",
        'logo-footer': "url('assets/images/Intellitek_Systems_LOGO.KO.png')",
        'lg-headerhome': "url('assets/images/header_home.png')",
        'sm-headerhome': "url('assets/images/sm-headerhome.png')",
        'lg-headersolutions' : "url('assets/images/header_solutions.png')",
        'sm-headersolutions' : "url('assets/images/sm-header_oursolutions.png')",
        'lg-headercontact' : "url('assets/images/header_contactus.png')",
        'sm-header_contactus' : "url('assets/images/sm-header_contactus.png')",
        'lg-headerresources' : "url('assets/images/header_resources.png')",
        'sm-header_resources' : "url('assets/images/sm-header_resources.png')",
        'lg-headerdemo' : "url('assets/images/header_demo.png')", 
        'sm-header_requestdemo' : "url('assets/images/sm-header_requestdemo.png')", 
        'lg-headertrial' : "url('assets/images/header_trial.png')", 
        'sm-header_requesttrial': "url('assets/images/sm-header_requesttrial.png')", 
        'sm-solmenu' : "url('assets/images/header_solmenu.png')",
        'lg-solutions2' : "url('assets/images/photo_solutions2.png')",
        'photo-home': "url('assets/images/photo_home.png')",
        'photo_solutions': "url('assets/images/photo_solutions.png')",
        'map': "url('assets/images/map.png')",
        'sm-map': "url('assets/images/sm-map.png')",
        'check':"url('assets/icons/check.svg')"
      },
      boxShadow:{
        'c1': '0px 4px 14px rgba(0, 0, 0, 0.12)'
      },
      colors: {
        red: '#D85950',
        purple: '#C2A1C5',
        orange: '#F7B77F',
        blue: '#00A9A8',
        green: '#5FB269',
        backgroundgray: '#EEF1F3',
        gray3: '#636363',
        lightgray: '#F3F3F3',
        lightgray2: '#F9F9F9',
        gray2:'#494949',
        gray: '#919190',
        black: '#373939',
        darkblack: '#000000',
        white: '#FFFFFF',
        gray4: '#DCDCDC',
        gray4: '#D0D0D0',
      },
      fontSize:{
        'c16': '16px',
        'c18': '18px',
        'c56': '56px'
      },
      lineHeight:{
        'c19':'19px',
        'c22':'22px',
        'c26': '26px',
        'c68':'68px'

      },
      listStyleType: {
        none: 'none',
        disc: 'disc',
        decimal: 'decimal',
        square: 'square',
        roman: 'upper-roman',
        check: "url('assets/icons/check.svg')"
      }
    },
  },
  plugins: [],
}