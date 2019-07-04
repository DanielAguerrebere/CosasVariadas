#define uint_8 unsigned char;

int main(void){
  unit_8 SrcArray[50] = {10}; //All start with a value of 10
  unit_8 bSize = 50; //Same value that the array size
  vfnClearMemory(&SrcArray[0], bSize); //Set all element in the SrcArray to 0
  return 0;
}

void vfnClearMemory(unit_8 *bpSource, unit_8 bSize) {
  for (size_t i = 0; i < bSize; i++) { //Look to all elements in the SrcArray
    *bpSource = 0; //Set the first value in the array to 0
    bpSource++; //Set the pointer in the next element of the SrcArray
  }
}
