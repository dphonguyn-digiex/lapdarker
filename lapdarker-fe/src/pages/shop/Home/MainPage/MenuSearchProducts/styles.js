export const styles = {
  wrap_menu_search: {
    position: 'sticky',
    top: '86px',
    left: '0',
    right: '0'
  },
  wrap_formgroup: {
    paddingTop: '16px',
    paddingRight: '24px'
  },
  scrollbars: {
    width: '100%',
    height: '632px'
  },
  drawer: {
    '& .MuiDrawer-paper': {
      width: '100%',
      boxSizing: 'border-box',
      bgcolor: 'transparent',
      position: 'static'
    }
  },
  formgroup: {
    p: '6px 0',
    borderBottom: '1px solid',
    borderColor: 'rgba(236, 240, 244, 1)',
    '&:hover': {
      color: '#0E86D4'
    }
  },
  form_control_label: {
    justifyContent: 'space-between',
    m: '0',
    '& .MuiFormControlLabel-label': {
      fontWeight: '600',
      fontSize: '19px'
    }
  },
  accordion: {
    bgcolor: 'transparent',
    boxShadow: 'none',
    '&:not(:last-child)': {
      borderBottom: 0
    },
    '&:before': {
      display: 'none'
    }
  },
  accordion_summary: {
    p: '6px 0',
    '&:hover': {
      color: '#0E86D4'
    }
  },
  accordion_details: {
    pl: '0',
    display: 'flex',
    flexWrap: 'wrap'
  },
  tag: {
    width: 'fit-content',
    backgroundColor: 'white',
    borderRadius: '8px',
    margin: '16px 12px 0 0',
    cursor: 'pointer',
    transitionDuration: '300ms',
    transitionTimingFunction: 'cubic-bezier(0.4, 0, 0.2, 1)',
    '&:hover': {
      backgroundColor: '#ececec'
    }
  },
  icon_search: {
    fontSize: '24px',
    mr: '4px'
  },
  text01: {
    fontWeight: '600',
    fontSize: '17px'
  },
  text02: {
    fontSize: '19px',
    fontWeight: '600'
  }
};