function productExceptSelf(nums: number[]): number[] {
  const length = nums.length;
  console.log('length', length)
  const result = new Array(length).fill(1)
  console.log('result', result)

      // Initialize prefix product
  let prefixProduct = 1;

  // Calculate prefix products for each element
  for (let i = 0; i < length; i++) {
      console.log('start i', i) 
      console.log('current prefixproduct', prefixProduct) 
      // Assign the current prefix product to the result
      result[i] = prefixProduct;
      
      console.log(i, result);
      // Update the prefix product by multiplying with the current element
      prefixProduct *= nums[i];
      console.log('update prefixProduct', prefixProduct)
  }

      console.log('******')
      console.log('******')
      console.log('******')
  // Initialize suffix product
  let suffixProduct = 1;
  
  // Calculate suffix products for each element
  for (let i = length - 1; i >= 0; i--) {
      
      console.log('start i', i) 
      console.log('current suffixproduct', suffixProduct) 
      // Multiply the current suffix product with the result
      result[i] *= suffixProduct;
      console.log(result);
      
      // Update the suffix product by multiplying with the current element
      suffixProduct *= nums[i];
      console.log('update suffixProfuct', suffixProduct)
  }
  

  return result
}