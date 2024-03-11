class Person {
  name = "";
  address = "";
  email = "";
  phone = "";
  accountType = "";
  constructor(name, address, email, phone, accountType) {
    this.name = name;
    this.address = address;
    this.email = email;
    this.phone = phone;
    this.accountType = accountType;
  }
  getName() {
    return this.name;
  }

  getAddress() {
    return this.address;
  }
  setAddress(address) {
    this.address = address;
  }
  getEmail() {
    return this.email;
  }
  setEmail(email) {
    this.email = email;
  }
  getPhone() {
    return this.phone;
  }
  getAccountType() {
    return this.accountType;
  }
  toString() {
    return `Person[name = ${this.name}, address = ${this.address}, email = ${this.email}, phone = ${this.phone}, accountType = ${this.accountType}]`;
  }
}

class Account {
    username = "";
    password = "";
    status = "";
    constructor (username, password, status) {
        this.username = username;
        this.password = password;
        this.status = status;
    }
    login(username, password) {
        this.username = username;
        this.password = password;
    }
    resetPassword(username, newPassword) {
        this.username = username;
        this.newPassword = newPassword;
    }

}

class Receptionist extends Person {
    createBooking() {
        return this.createBooking;
    }
}

class Guest extends Person  {
    person = [];
    totalRoomBooked = 0;
    constructor(totalRoomBooked) {
        this.totalRoomBooked = totalRoomBooked;
    }
    createBooking() {
        return this.createBooking;
    }
    
    
}

class RoomBooking {
    reservationNumber = "";
    startDate = "";
    durationDays = "";
    createdBy = "";
    constructor(reservationNumber, startDate, durationDays, createdBy){
        this.reservationNumber = reservationNumber;
        this.startDate = startDate ;
        this.durationDays = durationDays;
        this.createdBy = createdBy;
    }
    getData() {

    }
    createBooking() {

    }
}

class Notification  {
    notification = "";
    createOn = ""
    content = "";
    sender = "";
    recipient = "";
    constructor(notification, createOn, content, sender, recipient) {
        this.notification = notification;
        this.createOn = createOn;
        this.content = content;
        this.sender = sender;
        this.recipient = recipient;
    }
    send() {

    }
}

class Room  {
    roomNumber = "";
    style = "";
    status = "";
    roomPrice = "";
    constructor(roomNumber, style, status, roomPrice) {
        this.roomNumber = roomNumber;
        this.style = style;
        this.status = status;
        this.roomPrice = roomPrice;
    }
    isRoomAvailable() {

    }
    createRoom() {

    }
}

class Hotel {
    name = "";
    room = [];
    location = "";
    constructor(name, location) {
        this.name = name;
        this.location = location;
    }
    getRooms() {

    }
    addnewRooms() {

    }
}

const main =() => {
    const person1 = new Person("Alice","Nakhonpathom","Alice1@gmail.com","0112255669", "Guest");
    const person2 = new Person("Bob","Kanjanaburi","BBob@gmail.com","0358995669","Guest");
    const person3 = new Person("Catherine","Nakhonpathom","Catherine@gmail.com","0999553644", "Receptionist");
    const person4 = new Person("David","Kanjanaburi","Davidd@gmail.com","0256458137", "Receptionist");

    console.log(person1.toString());
    console.log(person2.toString());
    console.log(person3.toString());
    console.log(person4.toString());

    /********************************************* */
    const room1 = new Room("")
}

main();