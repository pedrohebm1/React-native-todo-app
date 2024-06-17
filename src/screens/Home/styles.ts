import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    padding: 40
  },
  eventName: {
    fontSize: 26,
    color: '#060202',
    fontWeight: 'bold',
    marginTop: 48,
  },
  eventDate: {
    fontSize: 16,
    color: '#FFF'
  },
  input: {
    height: 56,
    backgroundColor: '#FFF',
    borderColor: '#060202',
    borderWidth: 1,
    color: '#060202',
    
    padding: 16,
    fontSize: 16,
    borderRadius: 5,
    marginRight: 4,
    marginBottom: 6
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold'
  },
  button: {
    height: 56,
    backgroundColor: '#060202',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center'
  },
  form: {
    width: '100%',
    flexDirection: 'column',
    marginTop: 36,
    marginBottom: 22,
  },
  listEmptyText: {
    color: '#FFF',
    fontSize: 18,
    textAlign: 'center'
  }
})