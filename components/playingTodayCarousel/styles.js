export default {
  title: {
    padding: '1rem 0 0 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    fontSize: { xs: '1rem', md: '1.5rem', lg: '1.7rem' },
    color: '#ffebc6',
    fontWeight: 300,
    textTransform: 'uppercase',
    '&:before': {
      content: '" "',
      display: 'inline-block',
      width: '20%',
      height: '.7px',
      backgroundColor: '#ffebc6',
    },
    '&:after': {
      content: '" "',
      display: 'inline-block',
      width: '20%',
      height: '.7px',
      backgroundColor: '#ffebc6',
    },
  },
  paper: {
    width: '100%',
    textAlign: 'center',
    bgcolor: '#6e0b24',
    border: 'none',
  },
  desc: {
    color: '#b09661',
  },
  container: {
    bgcolor: '#6e0b24',
    padding: '20px 0',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  carousel: {
    mt: 2,
    width: '100%',
    bgcolor: '#6e0b24',
    padding: { xs: '0 10px' },
  },
  card: {
    width: { xs: '100%', sm: '35vw', md: '35vw', lg: '25vw' },
    height: { xs: '55vw', sm: '25vw', md: '25vw', lg: '15vw' },
    bgcolor: '#2f6f2f',
  },
  stepper: {
    justifyContent: 'center',
    gap: 2,
    bgcolor: '#6e0b24',
    '& .MuiMobileStepper-dotActive': {
      bgcolor: '#b09661',
    },
  },
  buttons: {
    color: '#b09661',
  },
};
