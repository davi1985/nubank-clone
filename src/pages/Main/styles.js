import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8b10ab',
    justifyContent: 'center',
  },
  content: {
    flex: 1,
    maxHeight: 400,
    zIndex: 5,
  },
  card: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 4,
    marginHorizontal: 20,
    height: '100%',
    position: 'absolute',
    left: 0,
    right: 0,
    top: 0,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 30,
  },
  cardContent: {
    flex: 1,
    paddingHorizontal: 30,
    justifyContent: 'center',
  },
  title: {
    fontSize: 13,
    color: '#999',
  },
  description: {
    fontSize: 32,
    marginTop: 3,
    color: '#333',
  },
  cardFooter: {
    padding: 30,
    backgroundColor: '#eee',
    borderRadius: 4,
  },
  annotation: {
    fontSize: 12,
    color: '#333',
  },
});
