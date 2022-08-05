export default {
  appBar: ({ palette }) => ({
    position: { lg: 'absolute' },
    top: { lg: 0 },
    left: { lg: 0 },
    color: palette.primary.main,
    zIndex: 2,
    borderBottom: { xs: `2px solid #a99664`, lg: 'none' },
    background: {
      xs: '#6e0b24',
      lg: 'linear-gradient(to top, rgba(92, 10, 34, 0.5) 0%,  #000 100%)',
    },
    boxShadow: 'none',
  }),
  iconButton: {
    mr: 2,
    borderRadius: 200,
    '&:hover': {
      bgcolor: 'transparent',
    },
  },
  toolbar: {
    justifyContent: 'space-between',
    color: '#a99664',
  },
  links: {
    display: { xs: 'none', lg: 'flex' },
    gap: 2,
  },
  link: {
    textDecoration: 'none',
    mb: '5px',
    color: '#a99664',
    cursor: 'pointer',
    fontWeight: 'bold',
    fontSize: { xs: '1rem', lg: '1.2rem' },
    display: 'block',
    maxHeight: '21px',
    '&::after': {
      transition: 'width 0.2s ease-in-out',
      content: '""',
      width: 0,
      height: '2px',
      bgcolor: '#a99664',
    },
    '&:hover': {
      textDecoration: 'none',
      color: '#a99664',
    },
    '&:hover::after': {
      display: 'block',
      mt: '3px',
      width: '100%',
    },
  },
  backDrop: {
    color: '#fff',
    zIndex: theme => theme.zIndex.drawer + 1,
    background:
      'linear-gradient(90deg, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.9) 50%, rgba(0,0,0,0.85) 100%)',
  },
  bdropLink: {
    fontWeight: 800,
    fontSize: '1.3rem',
    mb: 2,
  },

  image: {
    '&::before': {
      zIndex: 1,
      opacity: 0.4,
      content: '""',
      width: '100%',
      height: 'calc(100%-64px)',
      bgcolor: '#6e0b24',
      position: 'absolute',
      top: {
        xs: '64px',
        lg: '64px',
      },
      left: 0,
      right: 0,
      bottom: 0,
    },
  },
};
