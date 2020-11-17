<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class CertificateController extends Controller
{
    public array $extensions = ['pem'];

    public function upload(Request $request)
    {
        $data = $request->pem;
        $this->uploadFile($data);

        // $cert = file_get_contents($data);
        // $certinfo = openssl_x509_parse($cert);
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
        return $data->storeAs('certificado', $novoNome);
    }
}
