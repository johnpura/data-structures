/**
 * This module contains various methods that manipulate arrays 
 * using minimal built-in JavaScript Array methods.
 */

const arrayFunctions = {
    /**
     * The add() method adds an element to the end of an array and returns 
     * the new length of the array.
     * 
     * @param {*} element The element to add.
     * @param {*} data The array to add the element to.
     */
    add(element, data) {
        const index = data.length;
        data[index] = element;
        return data.length;
    },

    /**
     * The remove() method removes the last element from an array and returns 
     * that element. This method changes the length of the array.
     * 
     * @param {*} data The array to remove the element from.
     */
    remove(data) {
        const item = data.length - 1;
        const value = data[item];
        delete data[item];
        data.length--;
        return value;
    },

    /**
     * The indexOf() method returns the first index at which a given element 
     * can be found in an array, or -1 if it is not present.
     * 
     * @param {*} element The element to locate.
     * @param {*} data The array to search.
     */
    indexOf(element, data) {
        let index = -1;
        for(let i = 0; i < data.length; i++) {
            if(element === data[i]) {
                index = i;
                break;
            } 
        }
        return index;
    },

    /**
     * The contains() method determines whether an array contains a certain 
     * element, returning true or false as appropriate.
     * 
     * @param {*} element The element to locate.
     * @param {*} data The array to search.
     */
    contains(element, data) {
        let hasItem = false;
        for(let i = 0; i < data.length; i++) {
            if(element === data[i]) {
                hasItem = true;
                break;
            }
        }
        return hasItem;
    },

    /**
     * The flatten() method creates and returns a new array with all the sub-array elements 
     * concatted into it.
     * 
     * @param {*} data The array to flatten.
     */
    flatten(data) {
        let flat = [];
        for(let i = 0; i < data.length; i++) {
            if (Array.isArray(data[i])) {
                flat.push(...this.flatten(data[i]));
            } else {
                flat.push(data[i]);
            }
        }
        return flat;
    },

    /**
     * The reverse() method reverses the order of the elements in an array
     * @param {*} data The array to reverse.
     */
    reverse(data) {

    },
    /**
     * The toString() method concantenates the elements of an array and returns 
     * a string representation of that array.
     * @param {*} data The array to covert to a string.
     */
    toString(data) {

    }
}

module.exports = arrayFunctions;
