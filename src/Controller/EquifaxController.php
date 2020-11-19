<?php
// src/Controller/LuckyController.php
namespace App\Controller;

use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Form\EquifaxType;

class EquifaxController extends AbstractController
{
    /**
    * @Route("/")
    */
    public function index(Request $request)
    {
        $form = $this->createForm(EquifaxType::class);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            return $this->render('thank-you.html.twig');
        }

        return $this->render('equifax.html.twig', [
            'equifax_form' => $form->createView()
        ]);
    }

}