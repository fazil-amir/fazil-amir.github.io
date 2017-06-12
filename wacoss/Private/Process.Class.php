<?php


/* ############################################################################################################################################### 
																										
	CLASS PROCESS
																																			
################################################################################################################################################# */


class Process {
	

	/* ========================
	
		PUBLIC METHOD STARTS
	
	====================================================================================================================== */
	
	

	/**
	 * processTicketOrder	
	 *
	 * Process This ticket order issued by a user.
	 * 
	 * @param  array 	$ticketDetails Takes the array of ticket information along with issuer name and email.
	 * 
	 * @return string 	Retruns the generated ticket's file name as string.
	 * 
	 */
	
	public function processTicketOrder($ticketDetails){

		$issuerDetails 			= [
			'issuerName'			=> $ticketDetails[0]['contact']['fullName'],
			'issuerEmail'			=> $ticketDetails[0]['contact']['email']			
		];

		array_shift($ticketDetails);

		$html 					= $this -> getTicketTamplate($issuerDetails, $ticketDetails);

		$fileName 				= $this -> createTicketFile($html);

		return $fileName;

	}




	/* ========================
	
		PRIVATE METHOD STARTS
	
	====================================================================================================================== */
	
	

	/**
	 * getTicketTamplate
	 *
	 * Generates a ticket and returns as string.
	 * 
	 * @param  array $issuerDetails Takes the contact persons/issuer's name and email.
	 * @param  arrau $persons       Takes the ticket information.
	 * 
	 * @return string               Returns the final ticket including entertained people
	 */
	
	private function getTicketTamplate($issuerDetails, $persons) {

		$issuedDate				= date('d/m/Y');
		$refNumber				= 'REF' . substr(mt_rand(), 6);

		$html = '<div style="padding:25px;" id="customTicket"><br>';
		$html .= '<table border="0" width="600" cellspacing="0" cellpadding="10" class="zz-zz">';
		$html .= '<tbody>';
		$html .= '<tr>';
			$html .= '<td style="text-align: center;" colspan="4">';
			$html .= '<div style="font-size: 24px; padding: 20px;">Your Pass For<br /><img style="width: 250px;" src="Assets/Images/LogoPrimary.png" alt="" /></div>';
			$html .= '</td>';
		$html .= '</tr>';
		$html .= '<tr>';
			$html .= '<td colspan="2">Date & Time: <strong>01-06-2017</strong> <strong>9:30AM-12:30PM</strong></td>';
			$html .= '<td style="text-align: right; width: 90px;" colspan="4">Ticket Ref:<strong> ' . $refNumber . '</strong><br />Issued At: <strong>' . $issuedDate . '</strong></td>';
		$html .= '</tr>';
		$html .= '<tr>';
			$html .= '<td colspan="6">Issued By: <strong>' . $issuerDetails["issuerName"] . '</strong></td>';
		$html .= '</tr>';
		$html .= '<tr>';
			$html .= '<td colspan="6"><span style="color: #33cccc; font-size: 18px;">This Pass Includes: </span></td>';
		$html .= '</tr>';
		$html .= '<tr>';
			$html .= '<td style="text-align: center;" width="50"><strong>#</strong></td>';
			$html .= '<td><strong>Full Name</strong></td>';
			$html .= '<td style="width: 90px;" colspan="2"><strong>Food Choice</strong></td>';
		$html .= '</tr>';

		$i = 1;

		foreach ($persons as $key => $value) {			
			$html .= '<tr>';
				$html .= '<td style="text-align: center;" width="50" >' . $i++ . '</td>';
				$html .= '<td>' . $value['fullName'] . '</td>';
				$html .= '<td>' . $value['foodChoice'] . '</td>';
			$html .= '</tr>';
		}
		
		$html .= '<tr>';
		$html .= '<td colspan="3">&nbsp;</td>';
		$html .= '</tr>';
		$html .= '<tr>';
		$html .= '<td colspan="3" style="text-transform:initial"><strong>For any query contact:</strong>  &nbsp; &nbsp;  Mobile: +91 9964517679 &nbsp; &nbsp; Website: http://fazilamir.me</td>';
		$html .= '</tr>';
		$html .= '</tbody>';
		$html .= '</table><br>';
		$html .= '</div>';

		return $html;

	}

	
	/**
	 * createTicketFile
	 *
	 * Creates a new ticket file in file system and returns the file name
	 * 
	 * @param  string $html Takes the html tamplete which has to written to the new file
	 * 
	 * @return string       Returns the newly create file's filename
	 */
	
	private function createTicketFile($html){

		$fileName 				= md5(microtime());

		$ticketFile 			= fopen('Tickets/' . $fileName, 'w');

		fwrite($ticketFile, $html);

		return $fileName;

	}

}

?>