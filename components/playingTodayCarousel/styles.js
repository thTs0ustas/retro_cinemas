export default {
  title: {
    padding: '1rem 0 0 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    gap: '1rem',
    fontSize: '1.7rem',
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
    width: '100%',
    bgcolor: '#2f2f2f',
  },
  card: {
    width: { xs: '100%', sm: '50vw', md: '35vw', lg: '25vw' },
    height: { xs: '55vw', sm: '45vw', md: '25vw', lg: '15vw' },
    bgcolor: '#2f6f2f',
  },
};
