class ATM:
    def __init__(self):
        self.pin=''
        self.balance=0
        self.menu()

    def menu(self):
        in_put=int(input("""how can i hlep you 
                         enetr the 1 for cretate the pin
                         enter the 2 for change pin
                         enter the 3 for add_change_balance
                         enetr the 4 for see balance
                         enetr the any key to exit""")) 
    def create_pin(self):
        pininter= int(input("enetr the pin "))
        self.pin=pininter
        print("pin created succesfully ")       
        self.menu()

    def change_pin(self):
        new_pin= int(input("enetr the new pin "))
        self.pin=new_pin
        print("new pin change successfuly ")
        self.menu()

    def add_change_pin(self):
       balance=  int(input(f"your balance is {self.balance} if want to add balance yes or no "))
       if(balance=="yes"):
           newbalance= int(input("enetr the new balance "))
           self.balance= newbalance
           
        

                