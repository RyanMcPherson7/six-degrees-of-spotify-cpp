#include <iostream>
#include <fstream>
#include <string>

using namespace std;

int main() {

    fstream inputFile;
    inputFile.open("small-connect.txt", ios::in);

    if (inputFile.is_open()) {

        string line;
        while (getline(inputFile, line)) {

            const string delimiter = " -> ";
            int i = line.find(delimiter);
            string first = line.substr(0, i);
            string second = line.substr(i + delimiter.length());

            cout << first << " " << second << endl;
        }

        inputFile.close();
    }

    return 0;
}