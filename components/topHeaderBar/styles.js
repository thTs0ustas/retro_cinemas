export default {
  topHeaderBar: {
    height: '40px',
    padding: '0 3vw',
    bgcolor: '#000',
    display: 'flex',
    justifyContent: 'space-between',
  },
  group: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  buttonMember: {
    width: '120px',
    height: '40px',
    borderRadius: '0',
    fontWeight: 'bold',
    color: '#a99664',
    '&:hover': {
      color: '#faebc8',
      backgroundColor: '#000',
    },
  },
  buttonSignup: ({ palette }) => ({
    borderRadius: '0',
    height: '40px',
    width: '120px',
    bgcolor: '#a99664',
    fontWeight: 'bold',
    color: '#000',
    '&:hover': {
      color: '#000',
      backgroundColor: '#faebc8',
    },
  }),
};
