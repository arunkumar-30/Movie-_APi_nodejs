Installation of nodejs in windows 

--> open any web browser and search nodejs download or click on this link https://nodejs.org/en/download
--> Select operating system use msi(microsoft installer) select bit size and click on download.
--> After completion of your download open folder where it is downloded and double click. 
--> One promt will appears and do the installation process
# After completion of your installation process check weather node is installed or not
--> Open cmd 
--> node -v and hit enter
--> It shows version of the nodejs

# The following command used for creating directory called Express
mkdir Express
# The following command used for change Directory to Express
cd Express

# Command for initialization
npm init -y
This will create a package.json file with default settings for your project.

#Installation of Express
npm install express

# Now install all required Packages using npm (node package manager)

npm install body-parser
npm install --save multer
npm install pug

** Note **
--> Pug files always place in views folder

# main file named as index.js
--> To run the node application use the following command
node index.js
--> Open any web browser and enter localhost:3000/adddata    (Default port number is 3000)

# Movie application page is appears then enter the detail hit submit button
 --> It will redirect to localhost:300
--> There you can see *New Movie Added* followed by the links View MoviesData, Add MoviesData, Update MoviesData
--> By using this links you can perform CURD operations


# Output

![movie1](https://github.com/arunkumar-30/20KT1A0593-ARUNKUMAR/assets/113409292/d83850c5-016b-4993-b7a7-02d78911a130)
![movie 2](https://github.com/arunkumar-30/20KT1A0593-ARUNKUMAR/assets/113409292/bacca348-22c2-40f1-a1e3-ea4ad9046e6d)
![movie3](https://github.com/arunkumar-30/20KT1A0593-ARUNKUMAR/assets/113409292/845de0db-c84c-4c20-8e35-3ac0b6dc2774)
![movie4](https://github.com/arunkumar-30/20KT1A0593-ARUNKUMAR/assets/113409292/0d06af46-e93c-4057-8289-50c8c7d01356)
