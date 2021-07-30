import {StyleSheet, I18nManager} from 'react-native';

export const GlobalStyles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  title: {
    marginTop: 16,
    paddingVertical: 8,
    borderWidth: 4,
    borderColor: '#20232a',
    borderRadius: 6,
    backgroundColor: '#61dafb',
    color: '#20232a',
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
  },
  Header: {
    height: '100%',
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
  },
  HeaderText: {
    fontWeight: 'bold',
    fontSize: 20,
    color: '#333',
    letterSpacing: 1,
  },
  Icon: {
    position: 'absolute',
    left: 10,
    width: 50,
    height: 50,
  },
  IconHeart: {
    position: 'absolute',
    left: 290,
  },
  input: {
    height: 40,
    width: 200,
    margin: 12,
    borderWidth: 1,
    textAlign: I18nManager.isRTL ? 'right' : 'left',
  },
  FlatList: {
    margin: 20,
    height: 80,
    width: 300,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#F79D84',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
