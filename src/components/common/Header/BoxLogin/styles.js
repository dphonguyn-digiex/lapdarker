export const styles = {
  box: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '900px',
    display: 'flex',
    flexDirection: 'row',
    borderRadius: '16px',
    minHeight: '500px'
  },
  img: {
    width: '450px',
    height: '100%',
    borderTopRightRadius: '16px',
    borderBottomRightRadius: '16px'
  },
  side_box: {
    flexBasic: '0px',
    flex: '1 1 0px',
    display: 'flex'
  },
  wrap_side_box: {
    padding: '32px 46px',
    display: 'flex',
    flexDirection: 'column'
  },
  side_box_header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  side_box_body: {
    display: 'flex',
    flexDirection: 'column',
    padding: '16px 0',
    justifyContent: 'space-between',
    height: '100%'
  },
  text_body01: {
    color: '#06c1c4',
    fontSize: '18px',
    fontWeight: 'bold'
  },
  text_body02: {
    color: '#2b50c0',
    fontSize: '23px'
  },
  text_body03: {
    fontSize: '13px',
    fontWeight: 'bold',
    padding: '40px 0 8px 0',
    color: '#8c91a1'
  },
  input_form: {
    margin: '24px 0'
  },
  input_label: {
    fontSize: '24px',
    fontWeight: 'bold',
    color: 'rgba(218, 223, 225, 1)'
  },
  input: {
    fontSize: '24px',
    fontWeight: 'bold',
    padding: '8px 0 0 0'
  },
  btn_login: {
    borderRadius: '10px'
  },
  text_btn_login: {
    fontWeight: '600',
    textTransform: 'initial',
    fontSize: '19px'
  },
  text_forgot_pass: {
    fontSize: '14px',
    fontWeight: '600',
    textTransform: 'initial',
    color: 'rgba(0, 101, 238, 1)'
  },
  text_return: {
    fontSize: '14px',
    textTransform: 'initial',
    color: '#0e0e0e'
  },
  icon_btn: {
    fontSize: '19px'
  },
  icon_btn_sn: {
    bgcolor: '#f8fafc',
    mr: '8px'
  }
};
