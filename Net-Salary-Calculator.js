    const KRA_TAX_RATE = 0.3;
    const NHIF_RATE = 0.05;
    const NSSF_RATE = 0.06;

    // Function to get the payee
    function calculatePayee(grossSalary) {
        let payee = 0;
        if (grossSalary <= 24000) {
            payee = grossSalary * 0.1;
        } else if (grossSalary <= 32333) {
            payee = 2400 + ((grossSalary - 24000) * 0.25);
        } else if (grossSalary <= 40333) {
            payee = 5460 + ((grossSalary - 32333) * 0.3);
        } else if (grossSalary <= 48333) {
            payee = 9460 + ((grossSalary - 40333) * 0.32);
        } else if (grossSalary <= 57333) {
            payee = 14160 + ((grossSalary - 48333) * 0.34);
        } else if (grossSalary <= 95000) {
            payee = 19660 + ((grossSalary - 57333) * 0.36);
        } else {
            payee = 35360 + ((grossSalary - 95000) * 0.45);
        }
        return payee;
    }
     // Prompt the user for input
    function individualNetSalary(basicSalary,benefits){

        const grossSalary = basicSalary + benefits;
        // calculate payee
        const payee = calculatePayee(grossSalary);
        // Calculating NHIF deductions
        const nhifDeductions = grossSalary * NHIF_RATE;
        // Calculating NSSF deductions
        const nssfDeductions = grossSalary * NSSF_RATE;
        // Calculating net salary
        const netSalary = grossSalary - payee - nhifDeductions - nssfDeductions;
        
        // Output the results
        console.log(`Gross Salary: ${grossSalary}`);
        console.log(`Tax (PAYE): ${payee}`);
        console.log(`NHIF Deductions: ${nhifDeductions}`);
        console.log(`NSSF Deductions: ${nssfDeductions}`);
        console.log(`Net Salary: ${netSalary}`);
    }