function compareVersion(version1: string, version2: string): number {
    // Split the version strings into arrays of numbers
    const version1Parts = version1.split('.').map(Number);
    const version2Parts = version2.split('.').map(Number);

    // Initialize two pointers for each version array
    let pointer1 = 0;
    let pointer2 = 0;

    console.log(version1Parts)
    console.log(version2Parts)

    // Determine the maximum length of the version arrays
    const maxLength = Math.max(version1Parts.length, version2Parts.length);

    // Iterate through each part of the version arrays
    while (pointer1 < maxLength || pointer2 < maxLength) {
        console.log('top of while!');
        // Get the current part of each version, defaulting to 0 if the pointer exceeds the array length
        const part1 = pointer1 < version1Parts.length ? version1Parts[pointer1] : 0;
        const part2 = pointer2 < version2Parts.length ? version2Parts[pointer2] : 0;
        // Compare the current parts of the versions
        console.log(part1, ' ', part2);
        if (part1 < part2) {
            return -1;
        } else if (part1 > part2) {
            return 1;
        }

        // Move the pointers to the next part
        pointer1++;
        pointer2++;
    }
    return 0
};
