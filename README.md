## **Land Registry DApp**

A decentralized application (DApp) for managing property records on the Ethereum blockchain. This project allows users to register, approve, and manage land transactions in a secure and transparent manner using blockchain technology.

---

### **Features**
- Add new users and authorities.
- Create and approve properties.
- Manage property ownership and sales.
- Blockchain-based record-keeping for immutability.
- Secure approval processes for transactions.

---

### **Technologies Used**
- **Frontend**: HTML, CSS, JavaScript, jQuery
- **Backend**: Ethereum Blockchain (via Solidity smart contracts)
- **Tools**: Truffle, Ganache, lite-server, MetaMask

---

### **Prerequisites**
Before you begin, ensure you have the following installed:
- [Node.js](https://nodejs.org/)
- [Truffle Suite](https://trufflesuite.com/)
- [Ganache](https://trufflesuite.com/ganache/)
- MetaMask browser extension (configured to work with your local blockchain)

---

### **Setup and Installation**

1. **Clone the Repository**
   ```bash
   git clone <repository-url>
   cd land-registry-dapp
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Start Ganache**
   Open Ganache and create a workspace. Make sure the RPC server is running on `http://localhost:8545`.

4. **Compile the Smart Contracts**
   ```bash
   truffle compile
   ```

5. **Deploy the Smart Contracts**
   ```bash
   truffle migrate
   ```

6. **Run the Development Server**
   ```bash
   npm run dev
   ```

7. **Connect MetaMask**
   - Add a custom network with `RPC URL: http://localhost:8545`.
   - Import the Ganache accounts using private keys.

---

### **Usage**

1. **Open the Application**
   Access the DApp at `http://localhost:3000`.

2. **Interact with the DApp**
   - Register new users and authorities.
   - Add property details and approve them.
   - Manage ownership and execute sales.

3. **View Blockchain Events**
   Use the console to observe events emitted by the smart contracts.

---


---

### **View**


<img src="/Users/yughjuneja/Desktop/Homepage.png" alt="Homepage">

![Property Details](/Users/yughjuneja/Desktop/Property.png)
![Property Details](/Users/yughjuneja/Desktop/Property1.png)




### **License**
This project is licensed under the MIT License. See `LICENSE` for details.

---

This README is structured to guide users step-by-step and includes the basics for adding photos. Let me know if you need further customization!
