export const styles = {
  paper: {
    borderRadius: '16px',
    boxShadow: '0 0 #0000, 0 0 #0000, 0px 0px 12px rgb(0 0 0 / 6%)',
    padding: '24px',
    margin: '0 0 8px 0'
  },
  wrap_paper: {
    display: 'flex',
    flexDirection: 'row',
  },
  wrap_aside: {
    position: 'sticky',
    top: '86px',
    left: '0',
    right: '0'
  },
  part1: {
    display: 'flex',
    width: '80px',
    height: '80px'
  },
  img: {
    width: '100%',
    border: '1px solid rgba(236, 240, 244,1)',
    borderRadius: '4px',
    objectFit: 'contain'
  },
  part2: {
    display: 'flex',
    flexDirection: 'column',
    padding: '0 12px',
    flex: '1 1 0%',
    justifyContent: 'center'
  },
  part2_1: {
    display: 'flex',
    alignItems: 'center'
  },
  part2_2: {
    display: 'flex',
    alignItems: 'center'
  },
  part3: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  part4: {
    display: 'flex',
    alignItems: 'center',
    padding: '0 0 8px 0'
  },
  part5: {
    display: 'flex',
    backgroundColor: 'rgba(0, 101, 238,1)',
    borderRadius: '0.5rem'
  },
  part5_1: {
    flex: '1 1 0%',
    padding: '14px'
  },
  part6: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  part6_1: {
    display: 'flex',
    flexDirection: 'column'
  },
  part6_2: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  text1: {
    fontWeight: 'bold',
    fontSize: '16px',
    color: 'black'
  },
  text2: { fontSize: '14px', fontWeight: '600', color: '#fe3464', padding: '4px' },
  text3: { fontSize: '14px', fontWeight: 'bold', padding: '4px' },
  text4: {
    fontSize: '17px',
    fontWeight: '600',
    color: '#fe3464'
  },
  text5: {
    textTransform: 'initial',
    fontSize: '14px'
  },
  text6: {
    fontWeight: 'bold',
    fontSize: '20px',
    lineHeight: '0'
  },
  text7: {
    textTransform: 'initial',
    fontWeight: 'bold',
    fontSize: '18px'
  },
  text8: {
    padding: '8px 0',
    fontSize: '17px'
  },
  icon1: {
    padding: '4px',
    color: 'rgba(210, 210, 210,1)'
  },
  icon2: {
    fontWeight: 'bold',
    fontSize: '24px',
    padding: '4px 4px 4px 0'
  },
  icon3: {
    fontSize: '24px',
    fontWeight: 'bold'
  },
  del: {
    color: '#8c91a1',
    fontWeight: '600',
    fontSize: '14px',
    padding: '4px'
  },
  btn: {
    height: '20px',
    minWidth: '20px',
    m: '0 10px',
    '&:hover': { bgcolor: 'transparent' }
  },
  btn0: {
    justifyContent: 'flex-start',
    '&:hover': { bgcolor: 'transparent' }
  },
  btn1: {
    color: '#57617b',
    '&:hover': { bgcolor: 'transparent' }
  },
  btn2: {
    width: '100%',
    bgcolor: '#fe346d',
    color: '#fff',
    m: '16px 0 0 0',
    borderRadius: '12px',
    padding: '8px 12px',
    '&:hover': { bgcolor: 'rgba(210, 77, 87, 1)' }
  },
  outlined_input: {
    bgcolor: '#fff',
    borderRadius: '0.4rem',
    width: '100%',
    height: '100%',
    '.MuiOutlinedInput-input': {
      padding: '12px 16px'
    }
  }
};