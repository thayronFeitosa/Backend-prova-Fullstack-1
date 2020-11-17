<?php

namespace App\Http\Controllers;

use App\Certificate;
use Illuminate\Http\Request;

class CertificateController extends Controller
{
    public array $extensions = ['pem'];

    public function upload(Request $request)
    {
        try {
            $certificateData = [];
            $data = $request->pem;
            $id =  $this->uploadFile($data);
            $certificateData = $this->getCertificateData($data);
            $certificateData['document_id'] = $id;
            $certificateData['user_id'] = $request->user_id;
            $result = Certificate::create($certificateData);
            return response()->json($result, 201);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()]);
        }
    }

    private function uploadFile($data)
    {

        if (!$data) {
            return response()->json(['error' => "invalid certificate"], 422);
        }
        if (!in_array($data->getClientOriginalExtension(), $this->extensions)) {
            return response()->json(['error' => "invalid extensions"], 422);
        }

        $novoNome = uniqid() . ".{$data->getClientOriginalExtension()}";
        $data->storeAs('certificado', $novoNome);
        return $novoNome;
    }

    private function getCertificateData($data)
    {
        $cert = file_get_contents($data);
        $certinfo = openssl_x509_parse($cert);
        return [
            'subjectDN' => $this->getSubjectData($certinfo['subject']),
            'issuerDN' => $this->getIssuerData($certinfo['issuer']),
            'validFrom' => $certinfo['validFrom'],
            'validTo' => $certinfo['validTo']
        ];
    }

    private function getSubjectData($subjectArray)
    {
        return 'C=' . $subjectArray['C']
            . 'O=' . $subjectArray['O']
            . 'OU=' . $subjectArray['OU'][0]
            . 'OU=' . $subjectArray['OU'][0]
            . 'OU=' . $subjectArray['OU'][1]
            . 'OU=' . $subjectArray['OU'][2]
            . 'CN=' . $subjectArray['CN'];
    }

    private function getIssuerData($issuerArray)
    {
        return 'C=' . $issuerArray['C']
            . 'O=' . $issuerArray['C']
            . 'OU=' . $issuerArray['OU'][0]
            . 'OU=' . $issuerArray['OU'][1]
            . 'CN=' . $issuerArray['CN'];
    }
}
