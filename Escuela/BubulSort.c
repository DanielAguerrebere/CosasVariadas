void vfnBubbleSort(uint_8 *bpSource, uint_8 bSize);

  int main (void){
    unit_8 SrcArray[50] = {10}; //All start with a value of 10
    unit_8 bSize = 50; //Same value that the array size
    vfnBubbleSort (&SrcArray[0], bSize);
    return 0;
  }

  void vfnBubbleSort(uint_8 *bpSource, uint_8 bSize){
    uint_8 *comp; // Pointer to look in the SrcArray that compares values
    uint_8 mod; // Modify the values in the SrcArray

    for (size_t i = 0; i < bSize; i++) {
      mod = bpSource++;
      for(size_t j = i + 1; j < bSize; j++){
        if(*bpSource > *comp){
          mod = *bpSource;
          *bpSource = *comp;
          *comp = mod;
        }
        comp++;
      }
        bpSource++;
    }
  }
