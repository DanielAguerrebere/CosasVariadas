#define uint_8 unsigned char;

int main(void){
  unit_8 SrcArray[50] = {10}; //All start with a value of 10
  unit_8 bSize = 50; //Same value that the array size
  unit_8 ValueToWrite = 5; //This is the value that is going to be set in the SrcArray useed in the vfnSetMemory func
  vfnSetMemory(&SrcArray, bSize, ValueToWrite); //Calling the function
  return 0;
}

void vfnSetMemory(unit_8 *bpSource, unit_8 bSize, unit_8 ValueToWrite){
  for (size_t i = 0; i < bSize; i++) { //look up to all elements in the SrcArray
    *bpSource = ValueToWrite; // Set the first element of the array to ValueToWrite
    bpSource++; //Move to the next position in the SrcArray
  }
}
