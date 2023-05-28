export const styles = {
  paper: {
    borderRadius: '16px',
    boxShadow: '0 0 #0000, 0 0 #0000, 0px 0px 12px rgb(0 0 0 / 6%)',
    padding: '24px',
    margin: '0 0 12px 0'
  },
  wrap_paper: {
    display: 'flex',
    flexDirection: 'column'
  },
  text1: {
    fontSize: '26px'
  },
  part1: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center'
  },
  part2: {
    display: 'flex',
    flexDirection: 'column'
  },
  icon: {
    padding: '12px',
    fontSize: '24px',
    backgroundColor: '#f8fafc',
    borderRadius: '50%',
    color: 'rgba(254, 52, 100,1)'
  },
  tab: {
    color: '#0e0e0e',
    textTransform: 'initial',
    fontSize: '16px',
    borderTopLeftRadius: '12px',
    borderTopRightRadius: '12px',
    m: '0 8px',
    '&:hover': {
      bgcolor: '#ECF0F4'
    },
    '&.Mui-selected': {
      '.MuiTypography-root': {
        fontWeight: 'bold',
        color: '#0065ee'
      }
    }
  },
  group_btn: {
    display: 'flex'
  },
  btn: {
    border: '1px solid rgba(240, 242, 244,1)',
    borderRadius: '0.5rem',
    margin: '4px',
    padding: '8px 12px'
  },
  text_btn: {
    textTransform: 'initial',
    color: '#0065ee'
  }
};