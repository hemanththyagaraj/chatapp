import { fireStore } from "../config/firebase"

const usersRef = fireStore.collection('users')

export const storeLoggedInUserIntoDB = async (user) => {
    try {
        const { displayName, email, photoURL, uid } = user
        const docRef = usersRef.doc(user.uid)
        const doc = await docRef.get()
        if (doc.exists) return
        else docRef.set({ displayName, email, photoURL, uid, contacts: [] })
    } catch (error) {
        window.alert('Failed to store user into db')
    }
}

export const getAllUsers = (userId) => {
    return new Promise(async (resolve, reject) => {
        try {
            const querySnapshot = await usersRef.where('uid', "!=", userId).get()
            const docCollection = []
            querySnapshot.forEach(doc => docCollection.push(doc.data()))
            resolve(docCollection)
        } catch (error) {
            reject(error)
        }
    })
}